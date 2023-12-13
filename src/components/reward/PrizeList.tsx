import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Prize from '@app/components/reward/Prize';
import { getPrizeList } from '@app/api/features/prizeActions';

interface PrizeData {
  name: string;
  image: string; // The API is expected to return image URLs
  points: number;
  id: number;
}

type PrizeListProps = {
  prizeCount: number;
}

const PrizeList: React.FC<PrizeListProps> = ({prizeCount}) => {
  const [prizes, setPrizes] = useState<PrizeData[]>([]);

  // Fetch prizes from the API
  useEffect(() => {
    getPrizeList({useCache: true})
      .then((prizes) => {
        //if prize count is less than 0 or greater than the total number of prizes then just so all prizes
        const count = (prizeCount < 0 || prizeCount > prizes.length) ? prizes.length : prizeCount;
        let prizeData: PrizeData[] = [];
        for (let i = 0; i < count; i++) {
          const prizeImage = prizes[i].images?.display;
          prizeData.push({
            name: prizes[i].title,
            image: prizeImage ? prizeImage : "",
            points: prizes[i].pointsCost,
            id: prizes[i].id
          });
        }
        setPrizes(prizeData);
      })
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.prizesContainer}>
          {prizes.map((prize, index) => (
            <Prize
              key={index}
              name={prize.name}
              image={{uri: prize.image}} // Assuming the image is a URL
              points={prize.points}
              id={prize.id}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... (existing styles remain unchanged)
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    fontFamily: 'Nunito Sans',
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  rewardsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  rewardsText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Nunito Sans',
  },
  prizesContainer: {
    alignItems: 'center', // Center items horizontally
  },
  prizeItem: {
    width: '80%', // Adjust width as needed for spacing
    marginBottom: 20, // Adjust spacing between prizes
  },
  // ... (other styles remain unchanged)
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(169, 7, 10, 1)',
    width: 100,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  icon: {
    width: 20,
    height: 20,
    // Additional styling for the icon if needed
  },
  scrollView: {
    backgroundColor: '#ffffff', // Or any other desired background color
  },
  rewardsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  prizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  pointsBadge: {
    backgroundColor: '#4CAF50', // A color that stands out
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20, // Circular badge effect
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PrizeList;
