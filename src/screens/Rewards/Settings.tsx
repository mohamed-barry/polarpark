import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Alert
} from 'react-native';
import Arrow from '@app/assets/icons/rewards/right-arrow.png';
import Header from '@app/components/reward/RewardHeader';
import ProfileImage from '@app/assets/images/woosox-rewards-nobg.png';
import Home from '@app/assets/icons/rewards/blue-home.png';
import { ProfileInfo, getProfileInfo } from '@app/api/features/getProfileInfo';
import { logoutUser } from '@app/api/features/rewardsLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any;
}

type RenderProps = {
  item: {
    key: string;
    text: string;
    iconName: string;
    route: string;
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

  const [profile, setProfile] = useState<ProfileInfo>({
    name: 'John Doe',
    avatar: ProfileImage,
    userID: "0"
  });

  useEffect(() => {
    getProfileInfo({useCache: true})
      .then((pi) => {
        setProfile(pi);
      })
  }, [])

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const handleSectionClick = (route: string) => {
    if (route == 'Login') {
      logoutUser();
    }

    if (route == 'UploadProfilePhoto') {
      Alert.alert("Coming soon!", "The ability to change your profile picture is coming soon!");
    } else {
      navigation.navigate(route);
    }
  };

  const renderSettingItem = ({item}: RenderProps) => (
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
        <Image source={profile.avatar} style={styles.profileImage} />
        <Text style={styles.profileName}>{profile.name}</Text>
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
