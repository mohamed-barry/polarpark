import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import ConfettiIcon from '@app/assets/images/confetti-icon.png';
import HomeIcon from '@app/assets/images/home-icon.png';
interface Props {
  navigation: any;
}

const CongratReward: React.FC<Props> = ({navigation}) => {
  const handleReturnHome = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      {/* Placeholder for the image */}
      <Image source={ConfettiIcon} style={styles.image} />
      <Text style={styles.congratsText}>
        Congrats, you have redeemed your prize!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
        <Text style={styles.buttonText}>Return Home</Text>
        {/* Placeholder for the icon image */}
        <Image source={HomeIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CongratReward;
