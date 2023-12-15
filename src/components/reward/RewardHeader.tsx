import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NavBar from './NavBar'; // Assuming both files are in the same directory
import Hamburger from '@app/assets/icons/rewards/hamburger-icon.png';
import LogoImage from '@app/assets/images/woosox-rewards-nobg.png';
import {useNavigation} from '@react-navigation/native';

interface RewardHeaderProps {
  rightImage: any;
  onRightImageClick: () => void;
}

const RewardHeader: React.FC<RewardHeaderProps> = ({
  rightImage,
  onRightImageClick,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigation = useNavigation();

  const handleIconClick = () => {
    setIsNavOpen(!isNavOpen); // Toggles the NavBar visibility
  };

  const closeModal = () => {
    setIsNavOpen(false);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleIconClick} style={styles.iconContainer}>
        <Image source={Hamburger} style={styles.iconImage} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.headerImage} />
      </View>
      <View style={styles.rightIconContainer}>
        <TouchableOpacity onPress={onRightImageClick} style={styles.rightIcon}>
          <View style={styles.rightIconBackground}>
            <Image source={rightImage} style={styles.rightImage} />
          </View>
        </TouchableOpacity>
      </View>

      <NavBar
        closeModal={closeModal}
        navigation={navigation}
        isOpen={isNavOpen} // Pass the state of the NavBar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgb(16, 41, 89)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    width: '100%', // Use '100%' for dynamic width
    marginBottom: 30,
    paddingHorizontal: 20, // Adjust the horizontal padding
  },
  iconContainer: {
    marginRight: 20, // Add margin to the right of the hamburger icon
  },
  logoContainer: {
    flex: 1, // Occupy available space in the center
    alignItems: 'center',
  },
  headerImage: {
    width: 250, // Adjust the width of the logo image as needed
    height: 100, // Adjust the height of the logo image as needed
    resizeMode: 'contain',
  },
  rightIconContainer: {
    marginLeft: 20, // Add margin to the left of the right icon
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rightIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconBackground: {
    backgroundColor: 'white',
    borderRadius: 50, // Makes it a circle
    padding: 5, // Adjust the padding as needed
  },
  rightImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  // Add more styles as needed for your header
});

export default RewardHeader;
