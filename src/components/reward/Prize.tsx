import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PrizeModal from './PrizeModal'; // Make sure this import points to the location of your PrizeModal component

// Add props for name, image, and points
interface Prize {
  name: string;
  image: NodeRequire;
  points: number;
  userPoints: number; // The number of points the user has
}

const Prize: React.FC<Prize> = ({name, image, points, userPoints}) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    if (userPoints >= points) {
      setModalVisible(true); // User has enough points
    } else {
      Alert.alert(
        'Not enough points',
        "You don't have enough points to redeem this prize.",
      ); // User doesn't have enough points
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Function to handle the redeem action
  const handleRedeem = () => {
    // Implement the redeem logic here
    // Ensure to check that the user has enough points to redeem the prize
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        onPress={openModal}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <View style={styles.divider} />
        <View style={styles.rewardTextContainer}>
          <Text style={styles.rewardText}>{name}</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.points}>{points}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <PrizeModal
        visible={modalVisible}
        onClose={closeModal}
        onRedeem={handleRedeem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2, // Thicker border
    borderColor: '#D6D6D6', // Slightly darker border color for contrast
    borderRadius: 16, // Increased border radius for a softer look
    backgroundColor: 'white', // Light background color for the container
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 4, // More prominent shadow for Android
    shadowOpacity: 0.1, // More prominent shadow for iOS
    shadowRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {height: 5, width: 0},
    marginTop: 5,
    width: 350,
    height: 275,
  },
  image: {
    width: '100%', // Full width to use the container size
    height: 200, // Fixed height for consistency
    // Adjust if needed to fit the image better within the card
  },
  divider: {
    borderBottomWidth: 2, // Thicker divider
    borderBottomColor: '#EAEAEA', // Lighter divider color for subtlety
  },
  rewardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 15, // Reduced padding top to compensate for image adjustment
  },
  rewardText: {
    fontSize: 20, // Slightly larger font size for better readability
    fontWeight: 'bold', // Bolder font weight for importance
    color: '#333',
  },
  pointsContainer: {
    backgroundColor: '#4CAF50', // Changed to a green color for a more positive association
    borderRadius: 10, // Rounded corners for the points container
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  points: {
    color: 'white',
    fontSize: 18, // Slightly larger font size for better readability
    fontWeight: 'bold',
  },
});

export default Prize;
