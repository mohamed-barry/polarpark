// MapBox.tsx
import React from 'react';
import {TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

import MapImage from '@app/assets/images/map-background.jpeg';

type Props = {
  openMap: () => void
}

const MapBox = ({openMap}: Props) => {

  return (
    <TouchableOpacity onPress={openMap} style={styles.box}>
      <ImageBackground
        source={MapImage} // Replace with your image path
        style={styles.backgroundImage}
        imageStyle={styles.image}></ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // for Android shadow
    // For iOS shadow:
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    padding: 10,
  },
  backgroundImage: {
    opacity: 0.6, // Adjust opacity as needed
    justifyContent: 'center', // Centers the text inside the ImageBackground
    alignItems: 'center',
    height: 150, // Set the height according to your needs
    width: '100%', // Assuming full width
  },
  image: {
    borderRadius: 10, // Match borderRadius from box
  },
  text: {
    fontWeight: '800',
    color: 'white', // Choose color that contrasts well with your light image
    fontSize: 18,
    fontFamily: 'Nunito Sans',
  },
});

export default MapBox;
