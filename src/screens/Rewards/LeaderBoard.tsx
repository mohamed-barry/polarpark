import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';
import { ListRenderItem } from 'react-native';
import { ProfileInfo, getProfileInfo } from '@app/api/features/getProfileInfo';
import { logoutUser } from '@app/api/features/rewardsLogin';
import { LeaderboardEntry, getLeaderboard } from '@app/api/features/rewardsLeaderboard';

interface Props {
  navigation: any;
}

interface UserItem {
  id: number;
  name: string;
  points: number;
}

const users: UserItem[] = [
  // ... populate this array with your users data
];

export const LeaderBoard: React.FC<Props> = ({navigation}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const emptyUsers: Array<LeaderboardEntry> = [];
  const defaultUser: ProfileInfo = {
    name: 'John Doe',
    avatar: {},
    userID: "0"
  }

  const [currentUser, setCurrentUser] = useState(defaultUser)
  const [users, setUsers] = useState(emptyUsers);

  useEffect(() => {
    getProfileInfo({useCache: true})
      .then((info) => {
        // console.log(info)
        if (currentUser.name !== info.name) {
          setCurrentUser(info);
        }
      })
      .catch((e) => {
        console.error(e);
        logoutUser();
        navigation.navigate('Login');
      })

    getLeaderboard({useCache: true})
      .then((entries) => {
        setUsers(entries);
      })
      .catch((e) => {
        console.error(e);
      })
  });

  const renderItem: ListRenderItem<LeaderboardEntry> = ({item}) => (
    <View
      style={[styles.item]}>
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
