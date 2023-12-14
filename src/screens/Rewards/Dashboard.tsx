import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';

import Header from '@app/components/reward/RewardHeader';
import {NavigationProp} from '@react-navigation/native';
import QRImage from '@app/assets/icons/rewards/blue-qr.png';
import CodeModal from '@app/components/reward/CodeModal';
import {getAvaliblePoints} from '@app/api/features/pointsAction';
import {logoutUser} from '@app/api/features/rewardsLogin';
import {ProfileInfo, getProfileInfo} from '@app/api/features/getProfileInfo';
import AccountIcon from '@app/assets/icons/rewards/user-icon.png';
import {PrizeInfo, getPrizeList} from '@app/api/features/prizeActions';
import PrizeList from '@app/components/reward/PrizeList';

interface Props {
  navigation: NavigationProp<any>;
}

const Dashboard: React.FC<Props> = ({navigation}) => {
  const [isCodeModalVisible, setIsCodeModalVisible] = useState(false);

  const handleButtonClick = () => {
    navigation.navigate('RewardList');
  };

  const handleIconClick = () => {
    setIsCodeModalVisible(true);
  };

  const onRefresh = () => {
    getAvaliblePoints({useCache: false})
      .then(points => {
        // console.log(points)
        if (userPoints !== points) setUserPoints(points);
      })
      .catch(e => {
        console.error(e);
        Alert.alert("Unable to update points", e.message);
      });
  }

  const defaultProfileInfo: ProfileInfo = {
    name: 'John Doe',
    avatar: AccountIcon,
    userID: '0',
  };

  const defaultPrizes: Array<PrizeInfo> = [];

  const [profileInfo, setProfileInfo] = useState(defaultProfileInfo);
  const [userPoints, setUserPoints] = useState(0);
  const [prizes, setPrizes] = useState(defaultPrizes);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getProfileInfo({useCache: true})
      .then(info => {
        // console.log(info)
        if (profileInfo.name !== info.name) {
          setProfileInfo(info);
        }
      })
      .catch(e => {
        console.error(e);
        logoutUser();
        navigation.navigate('Login');
      });

    getAvaliblePoints({useCache: true})
      .then(points => {
        // console.log(points)
        if (userPoints !== points) setUserPoints(points);
      })
      .catch(e => {
        console.error(e);
        logoutUser();
        navigation.navigate('Login');
      });

    getPrizeList({useCache: true})
      .then(tPrizes => {
        if (prizes.length === 0) {
          tPrizes.sort((a, b) => {
            return b.id - a.id;
          });
          setPrizes(tPrizes);
        }
      })
      .catch(e => {
        console.error(e);
      })
  });

  // const prizeMapper = (p: PrizeInfo, i:number) => {
  //   if (i <= 5) {
  //     return (<Prize key={p.id} image={{uri: p.images?.medium}} name={p.title} price={p.pointsCost} />)
  //   }
  //   return (<React.Fragment key={p.id} />) //this is equivalant to using a <></> but with a key b/c u need that to map
  // }
  
  return (
    <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
      <View style={styles.container}>
        <Header rightImage={QRImage} onRightImageClick={handleIconClick} />
        <CodeModal
          modalVisible={isCodeModalVisible}
          setModalVisible={setIsCodeModalVisible}
          userID={profileInfo.userID} //todo make screen bright
        />
        <Text style={styles.welcomeText}>Welcome, {profileInfo.name}</Text>
        <View style={styles.pointContainer}>
          <Text style={styles.pointContainerTitle}>Rewards Points</Text>
          <Text style={styles.userPointsText}>{userPoints}</Text>
          <TouchableOpacity
            style={styles.chooseRewardsButton}
            onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Redeem Rewards</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <Text style={styles.featuredText}>Featured Offers & Rewards</Text>
        <View style={styles.featureDealsContainer}>
          <PrizeList prizeCount={5}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: 'Nunito Sans',
    color: '#333',
  },
  pointContainer: {
    backgroundColor: '#4A90E2',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointContainerTitle: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  userPointsText: {
    color: '#FFF',
    fontSize: 40,
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  chooseRewardsButton: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4A90E2',
    fontSize: 18,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    fontFamily: 'Nunito Sans',
    color: '#333',
    marginBottom: 10,
  },
  featureDealsContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: 'lightgray',
  },
});

export default Dashboard;
