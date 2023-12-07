import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import AccountIcon from '@app/assets/icons/rewards/user-icon.png';
import LeaderboardIcon from '@app/assets/icons/rewards/leaderboard-icon.png';
import FAQIcon from '@app/assets/icons/rewards/faq-icon.png';
import RedeemCodeIcon from '@app/assets/icons/rewards//redeem-code-icon.png';
import ExitIcon from '@app/assets/icons/rewards/arrow-icon.png';
import CrowdIcon from '@app/assets/icons/rewards/crowd-icon.png';
import HomeIcon from '@app/assets/images/home-icon.png';
import SettingIcon from '@app/assets/icons/rewards/settings-icon.png';

interface Props {
  navigation: NavigationProp<any>;
  closeModal: () => void;
  isOpen: boolean; // New prop to determine if the navbar is open or not
}

const NavBar: React.FC<Props> = ({navigation, closeModal, isOpen}) => {
  const userData = {
    name: 'John Doe',
  };

  const sections = [
    {name: 'Home', icon: HomeIcon, route: 'Dashboard'},
    {name: 'Leaderboard', icon: LeaderboardIcon, route: 'Leaderboard'},
    {name: 'FAQ', icon: FAQIcon, route: 'FAQ'},
    {name: 'Redeem Code', icon: RedeemCodeIcon, route: 'Redeem'},
    {name: 'Crowd Cameo', icon: CrowdIcon, route: 'CrowdCameo'},
    {name: 'Settings', icon: SettingIcon, route: 'Setting'},
  ];

  const handleSectionPress = (route: string) => {
    navigation.navigate(route);
    closeModal(); // Close modal after navigating
  };

  const handleButtonClick = () => {
    navigation.navigate('Login');
  };

  const handleBackgroundPress = () => {
    if (isOpen) {
      closeModal();
      Keyboard.dismiss();
    }
  };

  const renderSections = () => {
    return sections.map((section, index) => (
      <TouchableOpacity
        key={index}
        style={styles.navItem}
        onPress={() => handleSectionPress(section.route)}>
        <View style={styles.sectionContent}>
          <Image source={section.icon} style={styles.icon} />
          <Text style={styles.section}>{section.name}</Text>
        </View>
        {index !== sections.length - 1 && <View style={styles.line} />}
      </TouchableOpacity>
    ));
  };

  return (
    <TouchableWithoutFeedback onPress={handleBackgroundPress}>
      <View style={styles.navContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Image source={AccountIcon} style={styles.userImage} />
        </View>
        <View style={styles.sectionContainer}>{renderSections()}</View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleButtonClick}>
            <Text style={styles.signOutText}>Sign Out</Text>
            <Image source={ExitIcon} style={styles.placeholderIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const windowWidth = Dimensions.get('window').width;
const navWidth = windowWidth * 0.8;

const styles = StyleSheet.create({
  section: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  navContainer: {
    position: 'absolute',
    backgroundColor: 'rgb(16, 41, 89)',
    height: '100%',
    top: 0,
    left: 0,
    paddingTop: 40,
    borderRightWidth: 1,
    borderColor: 'lightgray',
    width: navWidth,
    fontFamily: 'Nunito Sans',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    paddingHorizontal: 10,
    fontFamily: 'Nunito Sans',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
    fontFamily: 'Nunito Sans',
    fontSize: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  sectionContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  navItem: {
    paddingVertical: 10,
    color: '#fff',
    marginTop: 20,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    marginTop: 20,
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomContainer: {
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  signOutText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
  },
  placeholderIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default NavBar;
