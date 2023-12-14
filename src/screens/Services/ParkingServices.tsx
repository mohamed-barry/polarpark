import React, {useState} from 'react';
import {Image, View, Pressable, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Text from '@app/components/general/Text/Text';
import {Box} from '@app/components';
import {Popup, showLocation} from 'react-native-map-link';
import ImageView from 'react-native-image-viewing';

const parkingMapImage = require('@app/assets/images/woosox-parking.jpg');
const lots = require('@app/assets/data/parking_lots.json');

export default function Parking(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(lots.dropdown);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupOpts, setPopupOpts] = useState({
    latitude: 0,
    longitude: 0,
    googlePlaceId: ''
  });
  const [imageVis, setImageVis] = useState(false);

  const getDirections = () => {
    if (value === null) {
      Alert.alert('Must specify a lot!');
    } else {
      setPopupOpts(lots.lot_info[value]);
      setPopupVisible(true);
      // showLocation(
      //   {
      //     ...lots.lot_info[value],
      //     alwaysIncludeGoogle: true,
      //   }
      // )
    }
  };

  return (
    <>
      <View style={{height: '60%', padding: 10, marginLeft: 2, marginTop: 20}}>
        <Text variant="heading1" textAlign="left">
          Parking Map
        </Text>
        <Text variant="subtitle1" textAlign="left">
          Here are the locations of all the recommended parking lots!{'\n'}
          Click on the image to enlargen it!
        </Text>
        <Pressable onPress={() => setImageVis(true)} style={{flex: 1}}>
          <Image
            style={{width: undefined, height: undefined, flex: 1}}
            resizeMode="contain"
            source={parkingMapImage}
          />
        </Pressable>
      </View>
      <View style={{height: '60%', padding: 10, marginLeft: 2}}>
        <Text variant="heading1" textAlign="left">
          Directions
        </Text>
        <Text variant="subtitle1" textAlign="left">
          Select a lot and press the button to get directions to a lot.
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{marginTop: 10}}
        />
        <Pressable onPress={getDirections} style={{height: 50, width: '100%'}}>
          <Box
            borderRadius={10}
            flex={1}
            width="100%"
            bg="testBackground"
            style={{marginTop: 10}}>
            <Text
              color="white"
              variant="heading2"
              textAlign="left"
              style={{marginTop: 5, marginLeft: 5}}>
              Get Directions
            </Text>
          </Box>
        </Pressable>
      </View>
      <Popup
        isVisible={popupVisible}
        onCancelPressed={() => setPopupVisible(false)}
        onAppPressed={() => setPopupVisible(false)}
        onBackButtonPressed={() => setPopupVisible(false)}
        modalProps={{
          animationIn: 'slideInUp',
        }}
        options={{...popupOpts, alwaysIncludeGoogle: true}}
      />
      <ImageView
        images={[parkingMapImage]}
        imageIndex={0}
        visible={imageVis}
        onRequestClose={() => setImageVis(false)}
      />
    </>
  );
}
