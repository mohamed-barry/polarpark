// updateaccountinfo.tsx
import TextField from '@app/components/reward/TextField';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
}

const UpdateAccountInfo: React.FC<Props> = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
    gender: '',
    race: '',
    maritalStatus: '',
    phoneNumber: '',
    // ... add other fields as necessary
  });

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://example.com/api/userinfo')
      .then(response => response.json())
      .then(data => {
        setUserInfo({
          ...userInfo,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          state: data.state,
          city: data.city,
          zipCode: data.zipCode,
          gender: data.gender,
          race: data.race,
          maritalStatus: data.maritalStatus,
          phoneNumber: data.phoneNumber,
        });
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
  }, []);

  const handleConfirmClick = () => {
    // Handle confirm click
  };

  return (
    <ScrollView>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.fieldContainer}>
        <TextField
          placeholder="Change your first name"
          value={userInfo.firstName}
          onChange={text => setUserInfo({...userInfo, firstName: text})}
        />
        <TextField
          placeholder="Change your last name"
          value={userInfo.firstName}
          onChange={text => setUserInfo({...userInfo, firstName: text})}
        />
        <TextField
          placeholder="Change your Address Line 1"
          value={userInfo.firstName}
          onChange={text => setUserInfo({...userInfo, firstName: text})}
        />
        <TextField
          placeholder="Change your Address Line 2"
          value={userInfo.firstName}
          onChange={text => setUserInfo({...userInfo, firstName: text})}
        />
        <View style={styles.row}>
          <View style={[styles.halfWidthInput, {marginRight: '4%'}]}>
            <TextField placeholder="Change your state" value={userInfo.state} />
          </View>
          <View style={styles.halfWidthInput}>
            <TextField
              placeholder="Change your zip code"
              value={userInfo.zipCode}
            />
          </View>
        </View>
        <TextField
          placeholder="Change your phone number"
          value={userInfo.firstName}
          onChange={text => setUserInfo({...userInfo, firstName: text})}
        />
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmClick}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 25, // Increase border radius for rounded corners
    padding: 15,
    fontSize: 16,
    marginBottom: 20, // Add space between text fields
  },
  fieldContainer: {
    padding: 10,
  },
  stateContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidthInput: {
    width: '48%', // Slightly less than half to account for margin
  },
  confirmButton: {
    backgroundColor: 'rgb(16,41,89)', // Blue background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: 'flex-end', // Align button to the right
    marginTop: 10,
  },
  confirmText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // White text color
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default UpdateAccountInfo;
