import React, {useState} from 'react';
import {View, Image, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import NavBar from './NavBar'; // Assuming both files are in the same directory
import Hamburger from '@app/assets/icons/rewards/hamburger-icon.png';
import LogoImage from '@app/assets/images/woosox-rewards-nobg.png';
import {useNavigation} from '@react-navigation/native';

interface RewardHeaderProps {
  rightImage: any; // Adjust the type according to the image prop type
  onRightImageClick: () => void;
}

const RewardHeader: React.FC<RewardHeaderProps> = ({
  rightImage,
  onRightImageClick,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigation = useNavigation(); // Get the navigation prop

  const handleIconClick = () => {
    setIsNavOpen(true);
  };

  const closeModal = () => {
    setIsNavOpen(false);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleIconClick}>
        <Image source={Hamburger} style={styles.iconImage} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.headerImage} />
        <View style={styles.rightIconContainer}>
          <TouchableOpacity
            onPress={onRightImageClick}
            style={styles.rightIcon}>
            <Image source={rightImage} style={styles.rightImage} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isNavOpen}
        onRequestClose={closeModal}>
        <NavBar
          closeModal={closeModal}
          navigation={navigation}
          isOpen={false}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgb(16, 41, 89)',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    paddingTop: 60,
    paddingBottom: 20,
    width: 430,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 45,
  },
  logoContainer: {
    alignItems: 'center', // Center logo image
    flex: 1,
    position: 'relative', // To position the right icon container
  },
  headerImage: {
    width: 350, // Adjust the width of the image
    height: 150, // Adjust the height of the image
    resizeMode: 'contain', // Adjust the image content mode as needed
  },
  iconImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  rightIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20, // Half the width and height for a circle
    width: 40,
    height: 40,
    elevation: 4, // Add elevation for a slight shadow effect
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  rightIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightImage: {
    width: 20, // Adjust the width of the right image icon
    height: 20, // Adjust the height of the right image icon
    resizeMode: 'contain', // Adjust the image content mode as needed
  },
  // Add more styles as needed for your header
});

export default RewardHeader;
