import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '@app/components/reward/Header';
import {NavigationProp} from '@react-navigation/native';
import { rewardsForgotPassword } from '@app/api/features/rewardsForgotPassword';

interface Props {
  navigation: NavigationProp<any>;
}

const ForgotPassword: React.FC<Props> = ({navigation}) => {
  // Add state and functions as needed for handling input and submission
  const [email, setEmail] = useState('');

  const handleContinueClick = () => {
    rewardsForgotPassword(email)
      .then((ret) => {
        if (ret) {
          Alert.alert("Check your email", "Check your email for further instructions!", [{text: 'OK', onPress: () => navigation.navigate('Login')}]);
        } else {
          console.error("how did this happen");
        }
      })
      .catch((e) => {
        Alert.alert("Unable to recover password", "Unable to recover password due to " + e.message);
      })
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.infoContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>
        <Text style={styles.subText}>
          Enter your email for your WooSox Rewards Account!
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail} // Handle email input change
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleContinueClick}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputBox: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(169, 7, 10, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
