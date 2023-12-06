import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any; // Replace 'any' with your NavigationProp type
}

const LeaderBoard: React.FC<Props> = ({navigation}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <Text> Leaderboard </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default LeaderBoard;
