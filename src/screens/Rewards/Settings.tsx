// Settings.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

  const onSignOut = () => {
    logoutUser();
    navigation.navigate('Login');
  }

  const settingsOptions = [
    {key: 'updateInfo', text: 'Update Account Information', iconName: 'user-circle-o', onClick: () => {navigation.navigate('UpdateAccountInfo')}},
    {key: 'uploadPhoto', text: 'Upload Profile Photo', iconName: 'camera', onClick: () => {navigation.navigate('UploadProfilePhoto')}},
    {key: 'changePassword', text: 'Change Password', iconName: 'lock', onClick: () => {navigation.navigate('ChangePassword')}},
    {key: 'signOut', text: 'Sign Out', iconName: 'sign-out', onClick: onSignOut},
  ];

  const renderSettingItem = ({item}: RenderProps) => (
    <TouchableOpacity style={styles.settingItem} onPress={item.onClick}>
      <Text style={styles.settingText}>{item.text}</Text>
      <Icon name={item.iconName} size={24} color="#6e6e6e" />
    </TouchableOpacity>
  );

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    userID: "0",
    name: "John Doe",
    avatar: ProfileImage
  })

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    getProfileInfo({useCache: true})
      .then(setProfileInfo)
  }, []);

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.profileSection}>
        <Image source={profileInfo.avatar} style={styles.profileImage} />
        <Text style={styles.profileName}>{profileInfo.name}</Text>

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
