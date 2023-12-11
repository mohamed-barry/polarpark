import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons';

const SecurityServices = () => {
  const handlePhonePress = () => {
    Linking.openURL('tel:(508) 500-1000');
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faShieldAlt} size={50} style={styles.icon} />
      <Text style={styles.header}>Park Security</Text>
      <Text style={styles.subheader}>
        Ensuring a Safe & Fun Experience at Polar Park
      </Text>
      <Text style={styles.description}>
        If you are having any troubles or concerns, please don't hesitate to
        call us. Tap the number below to connect with Polar Park's security
        team.
      </Text>
      <TouchableOpacity style={styles.callButton} onPress={handlePhonePress}>
        <Text style={styles.buttonText}>Call (508) 500-1000</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light grey background
  },
  icon: {
    marginBottom: 20,
    color: '#2a9d8f', // Color for the icon
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  callButton: {
    backgroundColor: '#007AFF', // iOS button color
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 30,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', // White color for the button text
  },
  // Remove box styles if not used
});

export default SecurityServices;
