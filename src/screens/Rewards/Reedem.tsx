import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
}

const Redeem: React.FC<Props> = ({navigation}) => {
  const handleScanQR = () => {
    Alert.alert('Redeem Code', 'Opening Camera for QR Scanning');
  };

  // Function to handle Redeem - this is just a placeholder
  const handleRedeem = () => {
    Alert.alert('Redeem', 'Code Redeemed');
  };

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.redeemContainer}>
        <Text style={styles.title}>Redeem Code</Text>
        <View style={styles.redeemBox}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter Code Here"
            placeholderTextColor="#666"
          />
          <TouchableHighlight
            style={styles.button}
            onPress={handleScanQR}
            underlayColor="#ddd">
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.redeemButton]}
            onPress={handleRedeem}
            underlayColor="#ddd">
            <Text style={styles.buttonText}>Redeem</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  redeemContainer: {
    alignItems: 'center',
    padding: 20,
  },
  redeemBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  inputBox: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#e7e7e7',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redeemButton: {
    backgroundColor: '#4CAF50',
  },
});

export default Redeem;
