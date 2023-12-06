import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '@app/components/reward//RewardHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from '@app/assets/images/home-icon.png';

interface Props {
  navigation: any; // Replace 'any' with your NavigationProp type
}

const CrowdCameo: React.FC<Props> = ({navigation}) => {
  const handleHome = () => {
    navigation.navigate('Dashboard'); // Navigate to the Dashboard screen
  };

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <Text style={styles.textStyle}> Coming Soon! </Text>
      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Text style={styles.buttonText}> Return Home</Text>
        <Image
          source={Home} // Replace with your image
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: '700',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'rgb(16,41,89)',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: 20,
    marginRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
    // Additional styling for the icon if needed
  },
});

export default CrowdCameo;
