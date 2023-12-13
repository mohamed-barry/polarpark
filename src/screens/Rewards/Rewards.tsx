import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '@app/components/reward/RewardHeader';

import {ScrollView} from 'react-native-gesture-handler';
import Home from '@app/assets/icons/rewards/blue-home.png';
import {NavigationProp} from '@react-navigation/native';
import PrizeList from '@app/components/reward/PrizeList';

interface Props {
  navigation: NavigationProp<any>;
}

const Rewards: React.FC<Props> = ({navigation}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header rightImage={Home} onRightImageClick={handleIconClick} />
        <View style={styles.titleContainer}>
          <View style={styles.rewardsContainer}>
            <Text style={styles.rewardsText}>Rewards</Text>
          </View>
        </View>
        <PrizeList prizeCount={-1} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    width: '80%',
    marginBottom: 20,
  },

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

export default Rewards;
