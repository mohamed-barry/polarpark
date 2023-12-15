/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  ImageSourcePropType,
  RefreshControl,
  StyleSheet,
  ImageBackground,
  View,
} from 'react-native';
import {Text} from '@app/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONCESSIONS_CSV_LINK, CONCESSIONS_CSV_CACHE_ID} from '../constants';
import {readRemoteFile} from 'react-native-csv';
import ConcessionBox from '@app/components/ui/ConcessionBox/ConcessionBox';
import SearchBox from '@app/components/ui/SearchBox/SearchBox';

let KEY = 0;
type ConcessionMap = {
  [id: string]: ConsessionStand;
};

type FoodItem = {
  name: string;
  description: string;
  tags?: Array<string>;
  allergians?: Array<string>;
  price?: number;
  image?: ImageSourcePropType;
};

type ConsessionStand = {
  name: string;
  description: string;
  image: ImageSourcePropType;
  location?: any; //TODO make a type for this?
  featured: Array<FoodItem>;
  other: Array<FoodItem>;
};

function displayConcessionStand(stand: ConsessionStand): JSX.Element {
  return <ConcessionBox concessionStand={stand} key={KEY++} />;
}

export default function Ordering(): JSX.Element {
  const test: Array<ConsessionStand> = [];

  const [food, setFood] = useState(test);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setFood([]);
    AsyncStorage.removeItem(CONCESSIONS_CSV_CACHE_ID).then(() =>
      readFoodCSV(food, setFood, setRefreshing),
    );
  }, [food]);

  let FIRST = true;
  if (FIRST) {
    readFoodCSV(food, setFood, setRefreshing);
    FIRST = false;
  }

  const styles = StyleSheet.create({
    noResults: {
      color: 'red',
      textAlign: 'center',
      marginTop: 20,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Array<ConsessionStand>>(
    [],
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      const matchedStands = food.filter(stand =>
        stand.featured.some(item =>
          item.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
      setSearchResults(matchedStands);
    }
  };

  return (
    <ImageBackground
      source={require('@app/assets/images/background-concessions.png')} // Replace with your actual background image path
      style={styles.backgroundImage}
      imageStyle={{opacity: 0.8}}
      resizeMode="cover">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{backgroundColor: 'transparent'}}>
        <SearchBox onSearch={handleSearch} />
        <View style={styles.gridContainer}>
          {searchTerm.trim() ? (
            searchResults.length === 0 ? (
              <Text style={styles.noResults}>
                No concessions currently sell this item
              </Text>
            ) : (
              searchResults.map(displayConcessionStand)
            )
          ) : (
            food.map(displayConcessionStand)
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

async function readFoodCSV(
  food: Array<ConsessionStand>,
  setFood: React.Dispatch<React.SetStateAction<ConsessionStand[]>>,
  setRefreshing: React.Dispatch<React.SetStateAction<boolean>>,
) {
  let concessions: ConcessionMap = {};
  //console.log("calling readfoodcsv");

  if (food.length !== 0) {
    return;
  }

  const cache = await AsyncStorage.getItem(CONCESSIONS_CSV_CACHE_ID);
  if (cache !== null) {
    const cached_val = JSON.parse(cache);
    if (cached_val.time) {
      const stale_time = new Date(cached_val.time);
      const curr_time = new Date();
      if (curr_time < stale_time) {
        //console.log("got it from cache!");
        setFood(cached_val.data); //if the cache is not stale, just use that data
        return;
      } else {
        //console.log("no cache");
        AsyncStorage.removeItem(CONCESSIONS_CSV_CACHE_ID); //if it is get rid of it
      }
    }
  }

  readRemoteFile(CONCESSIONS_CSV_LINK, {
    worker: true,
    header: true,
    step: (results: any) => {
      let data = results.data;
      let thisConcession = concessions[data.vendor_name];

      if (thisConcession === undefined) {
        thisConcession = {
          name: data.vendor_name,
          location: data.vendor_location,
          description: data.vendor_desc || '',
          image: {uri: data.vendor_image},
          featured: [],
          other: [],
        };
        concessions[data.vendor_name] = thisConcession;
      }

      let itemPrice =
        data.item_price === '' ? undefined : Number(data.item_price);
      let itemImage: ImageSourcePropType | undefined =
        data.item_image === '' ? undefined : {uri: data.item_image};

      let thisItem: FoodItem = {
        name: data.item_name,
        description: data.item_desc,
        price: itemPrice,
        image: itemImage,
      };

      thisConcession.featured.push(thisItem);
    },
    complete: () => {
      const any_concession = concessions['Any concession stand'];
      const others = any_concession ? any_concession.featured : [];
      let new_food: Array<ConsessionStand> = [];
      //console.log("running complete??");

      for (let vendorID in concessions) {
        if (vendorID !== 'Any concession stand') {
          let curr = concessions[vendorID];
          if (vendorID === '') {
            console.warn('Some items do not have a vendor name!');
          } else if (curr !== undefined) {
            curr.other = others;
            new_food.push(curr);
          } else {
            console.warn(
              'Could not find concession ' + vendorID + ', skipping',
            );
          }
        }
      }

      new_food.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name) {
          return -1;
        }
        return 0;
      }); //sort by names

      setFood(new_food);
      setRefreshing(false);

      const time = new Date();
      time.setDate(time.getDate() + 5);

      let cacheEntry = {
        data: new_food,
        time: time.toISOString(),
      };

      AsyncStorage.setItem(
        CONCESSIONS_CSV_CACHE_ID,
        JSON.stringify(cacheEntry),
      );
    },
  });
}

// Json stuff
// function FoodContainer({item = undefined}: ContainerProps): JSX.Element {
//   return (
//     <Box alignItems="center" flexDirection="row" mt="l">
//       <Box flex={1} pr="s">
//         <Text fontWeight="bold" variant="body">
//           {item?.name}
//         </Text>
//         <Text variant="subtitle1">{item?.description}</Text>
//       </Box>
//       <Box borderRadius={12} height={96} width={96}>
//         {item?.image ? (
//           <Image
//             style={{width: '100%', height: 90, borderRadius: 12}}
//             resizeMode="cover"
//             source={item?.image ? item.image : {}}
//           />
//         ) : (
//           <></>
//         )}
//       </Box>
//     </Box>
//   );
// }

// async function refreshData(): Promise<any> {
//   const resp = await fetch(CONCESSIONS_JSON_LINK);
//   const rawdata = await resp.text();
//   let data = JSON.parse(rawdata);
//   let stale_time = new Date();
//   stale_time.setDate(stale_time.getDate() + 5); //cache goes stale after 5 days
//   data.time = stale_time.toISOString();
//   AsyncStorage.setItem(CONCESSIONS_JSON_CACHE_ID, JSON.stringify(data));
//   return data;
// }

// async function getFood(): Promise<Array<ConsessionStand>> {
//   let food_val: any = undefined;
//   try {
//     const cache = await AsyncStorage.getItem(CONCESSIONS_JSON_CACHE_ID);

//     if (cache !== null) {
//       const temp = JSON.parse(cache);
//       const stale_time = new Date(temp.time);
//       const curr_time = new Date();
//       if (curr_time > stale_time) {
//         food_val = await refreshData();
//       } else {
//         food_val = temp;
//       }
//     } else {
//       food_val = await refreshData();
//     }
//   } catch (e) {
//     food_val = FOOD;
//     food_val.time = new Date(); //on failure, the cached value should instantly go stale
//     AsyncStorage.setItem(CONCESSIONS_JSON_CACHE_ID, JSON.stringify(food_val));
//   }

//   let concessions: Array<ConsessionStand> = [];

//   for (let i = 0; i < food_val.stores.length; i++) {
//     const store = food_val.stores[i];

//     let featured: Array<FoodItem> = [];
//     let others: Array<FoodItem> = [];

//     for (let j = 0; j < store.featured.length; j++) {
//       const food = store.featured[j];
//       const foodImage: ImageSourcePropType | undefined = food.image
//         ? {uri: food.image}
//         : undefined;

//       featured.push({
//         name: food.name,
//         description: food.description,
//         tags: food.tags,
//         allergians: food.allergians,
//         price: food.price,
//         image: foodImage,
//       });
//     }

//     concessions.push({
//       name: store.name,
//       description: store.description,
//       featured: featured,
//       other: others,
//     });
//   }

//   return concessions;
// }
