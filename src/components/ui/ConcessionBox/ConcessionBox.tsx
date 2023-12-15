import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageSourcePropType,
  ImageBackground,
} from 'react-native';
import MenuItemModal from './MenuItemModal';

type FoodItem = {
  name: string;
  description: string;
  tags?: Array<string>;
  allergians?: Array<string>;
  price?: number;
  image?: ImageSourcePropType;
};

type ConsessionStand = {
  name: string;
  description: string;
  location?: any;
  featured: Array<FoodItem>;
  other: Array<FoodItem>;
  image: ImageSourcePropType;
};

type ConcessionBoxProps = {
  concessionStand: ConsessionStand;
};

const ConcessionBox: React.FC<ConcessionBoxProps> = ({concessionStand}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(prevState => !prevState);
  };

  const styles = StyleSheet.create({
    box: {
      borderRadius: 20,
      overflow: 'hidden',
      margin: 5, // Reduced margin for a tighter grid
      width: '43%', // Approximate width for 2-column grid accounting for margin
      aspectRatio: 1.2, // Optional: if you want each box to be a square
      // height: 150, // Remove fixed height if using aspectRatio
      backgroundColor: 'white',
    },
    collapsed: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      // backgroundColor: 'white', // Assuming default background is white
    },

    collapsedTitle: {
      fontWeight: 'bold',
      fontSize: 24,
      color: 'white',
    },

    foodItemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    foodItemTextContainer: {
      flex: 1,
    },
    foodItemName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      marginBottom: 10,
    },
    foodItemDescription: {
      color: 'white',
      marginRight: 5,
    },
    foodItemImage: {
      width: 60,
      height: 60,
      borderRadius: 10,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center', // Center content for background image
      width: '100%', // Ensure it covers the entire TouchableOpacity
      height: '100%', // Ensure it covers the entire TouchableOpacity
    },
    titleOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      padding: 10,
    },
  });

  return (
    <TouchableOpacity onPress={toggleModal} style={styles.box}>
      <ImageBackground
        source={concessionStand.image}
        resizeMode="cover" // Ensures the image is contained within the box
        style={styles.imageBackground}>
        <View style={styles.titleOverlay}>
          <View style={styles.collapsed}>
            <Text style={styles.collapsedTitle}>{concessionStand.name}</Text>
          </View>
        </View>
      </ImageBackground>
      <MenuItemModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        menuItems={concessionStand.featured}
      />
    </TouchableOpacity>
  );
};

export default ConcessionBox;
