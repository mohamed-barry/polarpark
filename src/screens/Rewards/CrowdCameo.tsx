import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Header from '@app/components/reward//RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
}

const CrowdCameo: React.FC<Props> = ({navigation}) => {
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{flex: 1}}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.container}>
        <Text style={styles.textStyle}> Coming Soon! </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: '700',
    color: 'red',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'rgb(16,41,89)',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: 20,
    marginRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CrowdCameo;
