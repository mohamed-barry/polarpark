import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Header from '@app/components/reward/RewardHeader';
import {NavigationProp} from '@react-navigation/native';
import Prize from '@app/components/reward/Prize';
import QRImage from '@app/assets/icons/rewards/blue-qr.png';
import CodeModal from '@app/components/reward/CodeModal';

interface Props {
  navigation: NavigationProp<any>;
}

const Dashboard: React.FC<Props> = ({navigation}) => {
  const [isCodeModalVisible, setIsCodeModalVisible] = useState(false);

  const handleButtonClick = () => {
    navigation.navigate('RewardList');
  };

  const handleIconClick = () => {
    setIsCodeModalVisible(true);
  };

  const userName = 'John Doe';
  const userPoints = 350;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header rightImage={QRImage} onRightImageClick={handleIconClick} />
        <CodeModal
          modalVisible={isCodeModalVisible}
          setModalVisible={setIsCodeModalVisible}
        />
        <Text style={styles.welcomeText}>Welcome, {userName}</Text>
        <View style={styles.pointContainer}>
          <Text style={styles.pointContainerTitle}>Rewards Points</Text>
          <Text style={styles.userPointsText}>{userPoints}</Text>
          <TouchableOpacity
            style={styles.chooseRewardsButton}
            onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Redeem Rewards</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <Text style={styles.featuredText}>Featured Offers & Rewards</Text>
        <View style={styles.featureDealsContainer}>
          <Prize />
          <Prize />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: 'Nunito Sans',
    color: '#333',
  },
  pointContainer: {
    backgroundColor: '#4A90E2',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointContainerTitle: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  userPointsText: {
    color: '#FFF',
    fontSize: 40,
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  chooseRewardsButton: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4A90E2',
    fontSize: 18,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    fontFamily: 'Nunito Sans',
    color: '#333',
    marginBottom: 10,
  },
  featureDealsContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  separator: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: 'lightgray',
  },
});

export default Dashboard;
