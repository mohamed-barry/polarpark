import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import ConfettiIcon from '@app/assets/images/confetti-icon.png';
import RightArrow from '@app/assets/icons/rewards/arrow-icon.png';

interface Props {
  navigation: any; // Replace 'any' with your NavigationProp type
}

const CongratSignUp: React.FC<Props> = ({navigation}) => {
  // This function handles navigation to the Dashboard screen
  const handleStartEarning = () => {
    navigation.navigate('PrivacyPolicy'); // Navigate to the Dashboard screen
  };

  return (
    <View style={styles.container}>
      {/* Placeholder for the image */}
      <Image
        source={ConfettiIcon} // Replace with your image
        style={styles.image}
      />
      <Text style={styles.congratsText}>
        Congrats, you have signed up for WooSox Rewards!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStartEarning}>
        <Text style={styles.buttonText}>Start Earning</Text>
        {/* Placeholder for the icon image */}
        <Image
          source={RightArrow} // Replace with your icon
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    // Additional styling for the image if needed
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
    // Additional styling for the icon if needed
  },
});

export default CongratSignUp;
