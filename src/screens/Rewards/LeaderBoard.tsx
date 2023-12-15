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
  }, [currentUser, navigation]);

  const renderItem: ListRenderItem<LeaderboardEntry> = ({item}) => (
    <View style={styles.item}>
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{item.id}</Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );

  return (
    <View style={styles.page}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.contentContainer}>
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
    backgroundColor: '#F8F8F8',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 25,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    width: '100%',
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(169, 7, 10, 1)',
  },
  rankContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgb(16,41,89)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  rank: {
    color: '#F6BE00',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },
  name: {
    flex: 1,
    textAlign: 'left',
    color: '#555',
    fontWeight: '600',
  },
  points: {
    width: '30%',
    textAlign: 'right',
    color: '#555',
    fontWeight: '700',
  },
});

export default LeaderBoard;
