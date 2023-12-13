// updateaccountinfo.tsx
import Header from '@app/components/reward/RewardHeader';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Home from '@app/assets/icons/rewards/blue-home.png';
import TextField from '@app/components/reward/TextField';

interface Props {
  navigation: any;
}

const UpdateAccountInfo: React.FC<Props> = ({navigation}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };
  
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
          // ... set other fields from the data
        });
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
  }, []);

  const handleLoginClick = () => {
    // Handle login click
  };

  const handleContinueClick = () => {
    // Handle continue click
  };
  

  // Define your styles somewhere here...

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header rightImage={Home} onRightImageClick={handleIconClick}/>
      {/* ... rest of your component ... */}
      <TextField
        placeholder="Enter your first name"
        value={userInfo.firstName}
        onChange={text => setUserInfo({...userInfo, firstName: text})}
      />
      {/* Repeat for each field */}
      {/* ... */}
    </ScrollView>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  // ... your styles ...
  scrollViewContent: {
    // ... your styles ...
  },
  container: {
    // ... your styles ...
  },
  contentContainer: {
    // ... your styles ...
  },
  // ... other styles ...
});

export default UpdateAccountInfo;
