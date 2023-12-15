import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageSourcePropType,
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
      aspectRatio: 1, // Optional: if you want each box to be a square
      // height: 150, // Remove fixed height if using aspectRatio
      backgroundColor: 'white',
    },
    collapsed: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      backgroundColor: 'white', // Assuming default background is white
    },
    expanded: {
      backgroundColor: 'rgba(169, 7, 10, 1)', // Dark red background
      padding: 10,
    },
    collapsedTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
    expandedTitle: {
      fontWeight: 'bold',
      fontSize: 22, // Increased font size
      color: 'white',
      marginBottom: 15,
    },
    foodItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
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
  });

  return (
    <TouchableOpacity onPress={toggleModal} style={styles.box}>
      <View style={styles.collapsed}>
        <Text style={styles.collapsedTitle}>{concessionStand.name}</Text>
      </View>
      <MenuItemModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        menuItems={concessionStand.featured}
      />
    </TouchableOpacity>
  );
};

export default ConcessionBox;
