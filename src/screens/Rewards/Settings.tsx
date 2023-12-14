import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem
} from 'react-native';
import Arrow from '@app/assets/icons/rewards/right-arrow.png';
import Header from '@app/components/reward/RewardHeader';
import ProfileImage from '@app/assets/images/woosox-rewards-nobg.png';
import Home from '@app/assets/icons/rewards/blue-home.png';
import { ProfileInfo, getProfileInfo } from '@app/api/features/getProfileInfo';
import { logoutUser } from '@app/api/features/rewardsLogin';

interface Props {
  navigation: any;
}

type RenderProps = {
  item: {
    key: string;
    text: string;
    iconName: string;
    onClick: () => void;
  }
}

const Settings: React.FC<Props> = ({navigation}) => {
  const settingsOptions = [
    {
      key: 'updateInfo',
      text: 'Update Account Information',
      iconName: 'user-circle-o',
      route: 'UpdateAccountInfo',
    },
    {
      key: 'uploadPhoto',
      text: 'Upload Profile Photo',
      iconName: 'camera',
      route: 'UploadProfilePhoto',
    },
    {
      key: 'changePassword',
      text: 'Change Password',
      iconName: 'lock',
      route: 'ChangePassword',
    },
    {key: 'signOut', text: 'Sign Out', iconName: 'sign-out', route: 'Login'},
  ];

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const handleSectionClick = (route: string) => {
    navigation.navigate(route);
  };

  const renderSettingItem = ({item}) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={() => handleSectionClick(item.route)} // Added onPress event handler
    >
      <Text style={styles.settingText}>{item.text}</Text>
      <Image source={Arrow} style={{height: 40, width: 40}} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.profileSection}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>User Name</Text>
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
    borderRadius: 30,
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
});

export default Settings;
