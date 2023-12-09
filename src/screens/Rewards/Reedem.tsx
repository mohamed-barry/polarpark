import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  ColorValue, // Added for better button feedback
} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';
import { redeemCode } from '@app/api/features/pointsAction';

interface Props {
  navigation: any; // Replace 'any' with your NavigationProp type
}

type OutputBoxProps = {
  color: ColorValue,
  message: string,
  display: boolean
}

const Redeem: React.FC<Props> = ({navigation}) => {
  const defaultOB: OutputBoxProps = {
    color: "lightcoral",
    message: "",
    display: false
  }

  const [outputBox, setOutputBox] = useState(defaultOB);
  const [code, setCode] = useState("");

  const handleScanQR = () => {
    Alert.alert('Redeem Code', 'Opening Camera for QR Scanning');
  };

  // Function to handle Redeem - this is just a placeholder
  const handleRedeem = () => {
    redeemCode(code)
      .then((resp) => {
        if (resp.success) {
          setOutputBox({
            color: "lightgreen",
            message: resp.message,
            display: true
          })
        } else {
          setOutputBox({
            color: "lightcoral",
            message: resp.message,
            display: true
          });
        }
      })
      .catch((e) => {
        const msg = e instanceof Error ? e.message : "Unknown"
        setOutputBox({
          color: "lightcoral",
          message: "Failed to redeem code due to " + msg + ". Try again later.",
          display: true
        });
      })
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
            placeholderTextColor="#666" // Placeholder text color for better visibility
            value={code}
            onChangeText={setCode}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={handleScanQR}
            underlayColor="#ddd" // Underlay color for touch feedback
          >
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.redeemButton]}
            onPress={handleRedeem}
            underlayColor="#ddd">
            <Text style={styles.buttonText}>Redeem</Text>
          </TouchableHighlight>
        </View>
        {outputBox.display &&
        <View style={[styles.redeemBox, {backgroundColor: outputBox.color}]}>
          <Text>{outputBox.message}</Text>
        </View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Neutral background for the whole screen
  },
  redeemContainer: {
    alignItems: 'center',
    padding: 20,
  },
  redeemBox: {
    width: '90%',
    backgroundColor: '#fff', // Light background for the redeem box
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark color for text for better readability
    marginBottom: 30,
  },
  inputBox: {
    width: '100%',
    borderColor: '#ccc', // Subtle border color
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    fontSize: 16, // Increased font size for better readability
  },
  button: {
    backgroundColor: '#e7e7e7', // Subtle color for button
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#333', // Text color that contrasts well with button background
    fontSize: 18, // Making the text a bit larger for better tap targets
    fontWeight: 'bold', // Bold text for better visibility
  },
  redeemButton: {
    backgroundColor: '#4CAF50', // A green color to indicate a primary action
  },
});

export default Redeem;
