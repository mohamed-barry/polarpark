import React from 'react';
import {View, Text, Image, StyleSheet, ImageURISource} from 'react-native';

export type PrizeProps = {
  image: ImageURISource,
  name: string,
  price: number
}

const Prize: React.FC<PrizeProps> = (props: PrizeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Placeholder image */}
        <Image
          source={props.image} // Replace with your placeholder image
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.rewardTextContainer}>
        <Text style={styles.rewardText}>{props.name}</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    marginBottom: 10,
    width: 300,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%', // Adjust the width of the image as needed
    height: '80%', // Adjust the height of the image as needed
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  rewardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  rewardText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Nunito Sans',
  },
  pointsContainer: {
    backgroundColor: 'rgba(169, 7, 10, 1)',
    borderRadius: 5,
    padding: 5,
  },
  points: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Nunito Sans',
  },
});

export default Prize;
