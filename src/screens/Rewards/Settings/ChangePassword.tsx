// ChangePassword.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Change Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7', // Set the background color for the container
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Set the text color
  },
});

export default ChangePassword;
