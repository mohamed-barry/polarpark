import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Prize from '@app/components/reward/Prize';
import Header from '@app/components/reward/RewardHeader';
import PrizeModal from '@app/components/reward/PrizeModal';
import {NavigationProp} from '@react-navigation/native';
import HomeIcon from '@app/assets/images/home-icon.png';
import {ScrollView} from 'react-native-gesture-handler';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: NavigationProp<any>;
}

const Rewards: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState('');

  const prizes: string[] = [
    'Prize 1',
    'Prize 2',
    'Prize 3',
    'Prize 4',
    'Prize 5',
  ];

  const handlePrizeClick = (prizeName: string) => {
    setSelectedPrize(prizeName);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const redeemPrize = () => {
    setModalVisible(false);
    navigation.navigate('CongratReward'); // Navigate to 'CongratReward' page
  };

  const handleReturnHome = () => {
    navigation.navigate('Dashboard');
  };
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
          <TouchableOpacity style={styles.button} onPress={handleReturnHome}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Home</Text>
              <Image source={HomeIcon} style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.prizesContainer}>
          {prizes.map((prize, index) => (
            <TouchableOpacity
              key={index}
              style={styles.prizeItem}
              onPress={() => handlePrizeClick(prize)}>
              <Prize />
            </TouchableOpacity>
          ))}
        </View>

        <PrizeModal
          visible={modalVisible}
          onClose={closeModal}
          onRedeem={redeemPrize}
        />
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
});

export default Rewards;
