import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
  currentUser: string;
}

interface UserItem {
  id: number;
  name: string;
  points: number;
}

const users: UserItem[] = [
  // ... populate this array with your users data
];

const LeaderBoard: React.FC<Props> = ({navigation, currentUser}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const renderItem = ({item}) => (
    <View
      style={[
        styles.item,
        item.name === currentUser && styles.currentUserItem,
      ]}>
      <Text style={styles.rank}>{item.id}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <Text style={styles.header}> Leaderboard </Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  currentUserItem: {
    backgroundColor: '#FFCCCC', // light red color, adjust the hex as needed
  },
  rank: {
    width: '10%',
    textAlign: 'left',
  },
  name: {
    width: '60%',
    textAlign: 'center',
  },
  points: {
    width: '30%',
    textAlign: 'right',
  },
});

export default LeaderBoard;
