import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

const PointContainer: React.FC<Props> = ({navigation}) => {
  const handleButtonClick = () => {
    navigation.navigate('Rewards');
  };
  const userName = 'John Doe';
  const rewardsProgress = 60;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {userName}</Text>
      <View style={styles.pointContainer}>
        <Text style={styles.pointContainerTitle}>Rewards Points</Text>
        <View style={styles.progressBar}>
          <View
            style={{
              width: `${rewardsProgress}%`,
              backgroundColor: 'rgb(16, 41, 89)',
              height: 20,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.chooseRewardsButton}
          onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Choose Rewards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Nunito Sans',
    textAlign: 'center',
  },
  pointContainer: {
    backgroundColor: 'rgba(169, 7, 10, 1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointContainerTitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  progressBar: {
    backgroundColor: 'lightgrey',
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  chooseRewardsButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'rgb(16, 41, 89)',
    borderWidth: 2,
    width: 200,
    height: 30,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(16, 41, 89)',
    fontSize: 16,
    fontFamily: 'Nunito Sans',
  },
});

export default PointContainer;
