import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageURISource,
} from 'react-native';
import { PrizeModal, PrizePrompt } from './PrizeModal'; // Make sure this import points to the location of your PrizeModal component
import { getAvaliblePoints } from '@app/api/features/pointsAction';
import { redeemPrize } from '@app/api/features/prizeActions';

// Add props for name, image, and points
interface Prize {
  name: string;
  image: ImageURISource;
  points: number;
  id: number;
}

type FailProps = {
  visible: boolean,
  message: string,
  success: boolean;
}

const Prize: React.FC<Prize> = ({name, image, points, id}) => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [fail, setFail] = useState<FailProps>({visible: false, message: ""});

  // Function to open the modal
  const openModal = () => {
    getAvaliblePoints({useCache: false})
      .then((userPoints => {
        if (userPoints >= points || true) {
          setModalVisible(true); // User has enough points
        } else {
          Alert.alert(
            'Not enough points',
            "You don't have enough points to redeem this prize.",
          ); // User doesn't have enough points
        }
      }))
  
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
    redeemPrize(id)
      .then(resp => {
        setFail({
          visible: true,
          message: resp.message,
          success: true
        });
      })
      .catch((e: any) => {
        const message = e instanceof Error ? e.message : "Unknown Error";
        setFail({
          visible: true,
          message: message,
          success: false
        })
      })
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
      <PrizePrompt
        visible={fail.visible}
        message={fail.message}
        onClose={() => setFail({visible: false, message: ""})}
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
    maxWidth: "80%" //make sure the text doesn't get too wide
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
