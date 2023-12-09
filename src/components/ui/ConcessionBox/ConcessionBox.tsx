import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

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
  location?: any; //TODO make a type for this?
  featured: Array<FoodItem>;
  other: Array<FoodItem>;
};

type ConcessionBoxProps = {
  concessionStand: ConsessionStand;
};

const ConcessionBox: React.FC<ConcessionBoxProps> = ({concessionStand}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion} style={styles.box}>
      {/* Only show ImageBackground when not expanded */}
      {!isExpanded && (
        <View style={styles.collapsed}>
          <Text style={styles.collapsedTitle}>{concessionStand.name}</Text>
        </View>
      )}

      {isExpanded && (
        <View style={styles.expanded}>
          <Text style={styles.expandedTitle}>{concessionStand.name}</Text>
          {concessionStand.featured.map((item, index) => (
            <View key={index} style={styles.foodItemContainer}>
              <View style={styles.foodItemTextContainer}>
                <Text style={styles.foodItemName}>{item.name}</Text>
                <Text style={styles.foodItemDescription}>
                  {item.description}
                </Text>
              </View>
              {item.image && (
                <Image source={item.image} style={styles.foodItemImage} />
              )}
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 15,
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
    marginBottom: 10,
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
  },
  foodItemDescription: {
    color: 'white',
  },
  foodItemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default ConcessionBox;
