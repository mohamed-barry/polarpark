// Settings.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install react-native-vector-icons
import Header from '@app/components/reward/RewardHeader';
import ProfileImage from '@app/assets/images/woosox-rewards-nobg.png';
import Home from '@app/assets/icons/rewards/blue-home.png';

const settingsOptions = [
  {
    key: 'updateInfo',
    text: 'Update Account Information',
    iconName: 'user-circle-o',
  },
  {key: 'uploadPhoto', text: 'Upload Profile Photo', iconName: 'camera'},
  {key: 'changePassword', text: 'Change Password', iconName: 'lock'},
  {key: 'signOut', text: 'Sign Out', iconName: 'sign-out'},
];

interface Props {
  navigation: any; // Replace 'any' with your NavigationProp type
}

const Settings: React.FC<Props> = ({navigation}) => {
  const renderSettingItem = ({item}) => (
    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingText}>{item.text}</Text>
      <Icon name={item.iconName} size={24} color="#6e6e6e" />
    </TouchableOpacity>
  );

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.profileSection}>
        <Image
          source={ProfileImage} // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>User Name</Text>

        {/* Replace User Name with actual user name */}
      </View>
      <FlatList
        data={settingsOptions}
        renderItem={renderSettingItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // This makes it circular
  },
  profileName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 20,
  },
  settingText: {
    fontSize: 16,
  },
  // Add other styles as needed
});

export default Settings;
