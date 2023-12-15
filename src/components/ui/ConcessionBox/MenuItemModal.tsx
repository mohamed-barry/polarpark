import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';

type FoodItem = {
  name: string;
  description: string;
  tags?: Array<string>;
  allergians?: Array<string>;
  price?: number;
  image?: ImageSourcePropType;
};

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  menuItems: FoodItem[];
};

const MenuItemModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  menuItems,
}) => {
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
      width: '90%',
      height: '60%',
      backgroundColor: 'rgba(169, 7, 10, 1)',
      borderRadius: 20,
      padding: 20,
      paddingTop: 25,
      alignSelf: 'center',
    },
    titleText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      borderBottomWidth: 5,
    },

    foodItemContainer: {
      alignSelf: 'stretch',
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    foodItemTextContainer: {
      flex: 1,
    },
    foodItemText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    foodItemDescription: {
      color: 'white',
      fontSize: 14,
    },
    foodItemImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginLeft: 10,
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: 'transparent',
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 24,
    },
  });

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.titleText}>Menu Items</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ScrollView>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.foodItemContainer}>
                <View style={styles.foodItemTextContainer}>
                  <Text style={styles.foodItemText}>{item.name}</Text>
                  {item.description && (
                    <Text style={styles.foodItemDescription}>
                      {item.description}
                    </Text>
                  )}
                </View>
                {item.image && (
                  <Image source={item.image} style={styles.foodItemImage} />
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default MenuItemModal;
