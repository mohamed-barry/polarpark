import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faHome} from '@fortawesome/free-solid-svg-icons';

interface Props {
  navigation: any;
}

const CongratReward: React.FC<Props> = ({navigation}) => {
  // This function handles navigation to the Dashboard screen
  const handleStartEarning = () => {
    navigation.navigate('PrivacyPolicy'); // Correct this to navigate to the Dashboard or Rewards screen
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faStar}
        size={100}
        color="#FFD700"
        style={styles.icon}
      />
      <Text style={styles.congratsText}>
        Congrats, you have signed up for WooSox Rewards!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleStartEarning}>
        <Text style={styles.buttonText}>Return Home</Text>
        <FontAwesomeIcon icon={faHome} size={20} color="#FFF" />
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
    backgroundColor: '#FFF', // Use a neutral background color
  },
  icon: {
    marginBottom: 20,
    // Additional styling if needed
  },
  congratsText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Use a professional text color
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF', // Use a more professional button color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    shadowOpacity: 0.1, // Optional: add a subtle shadow
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF', // Ensure text is readable on the button background
    marginRight: 10,
  },
});

export default CongratReward;
