import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';
import {ListRenderItem} from 'react-native';
import {ProfileInfo, getProfileInfo} from '@app/api/features/getProfileInfo';
import {logoutUser} from '@app/api/features/rewardsLogin';
import {
  LeaderboardEntry,
  getLeaderboard,
} from '@app/api/features/rewardsLeaderboard';

interface Props {
  navigation: any;
}

export const LeaderBoard: React.FC<Props> = ({navigation}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const emptyUsers: Array<LeaderboardEntry> = [];
  const defaultUser: ProfileInfo = {
    name: 'John Doe',
    avatar: {},
    userID: '0',
  };

  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [users, setUsers] = useState(emptyUsers);

  useEffect(() => {
    getProfileInfo({useCache: true})
      .then(info => {
        // console.log(info)
        if (currentUser.name !== info.name) {
          setCurrentUser(info);
        }
      })
      .catch(e => {
        console.error(e);
        logoutUser();
        navigation.navigate('Login');
      });

    getLeaderboard({useCache: true})
      .then(entries => {
        setUsers(entries);
      })
      .catch(e => {
        console.error(e);
      });
  });

  const renderItem: ListRenderItem<LeaderboardEntry> = ({item}) => (
    <View style={[styles.item]}>
      <Text style={styles.rank}>{item.id}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );

  return (
    <View style={styles.page}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.container}>
        <Text style={styles.header}>Leaderboard</Text>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F8', // Light grey background
  },
  header: {
    fontSize: 26,
    fontWeight: '600', // Slightly less bold
    color: '#333', // Dark grey for better readability
    marginBottom: 25,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15, // Increased vertical padding
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1', // Lighter border color
    backgroundColor: '#FFF', // White background for each item
    width: '100%',
    marginVertical: 5, // Added vertical margin for spacing between items
  },
  currentUserItem: {
    backgroundColor: '#E6F9FF', // Changed to a light blue for subtlety
  },
  rank: {
    width: '10%',
    textAlign: 'left',
    color: '#555', // Dark grey text for better readability
  },
  name: {
    width: '60%',
    textAlign: 'center',
    color: '#555',
  },
  points: {
    width: '30%',
    textAlign: 'right',
    color: '#555',
  },
});

export default LeaderBoard;
