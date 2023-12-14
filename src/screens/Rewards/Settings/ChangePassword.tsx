import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';
import { rewardsChangePassword } from '@app/api/features/rewardsChangePassword';

interface Props {
  navigation: any;
}

const ChangePassword: React.FC<Props> = ({navigation}) => {
  const [oldPass, setOldPass] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  

  const changePass = () => {
    if (password != confirmPassword) {
      Alert.alert("Failure", "New password does not match!");
      return;
    }

    rewardsChangePassword(oldPass, password, confirmPassword)
      .then(success => {
        if (success) {
          Alert.alert("Success", "Successfully changed your password!", [{text: 'OK', onPress: () => navigation.navigate('Login')}])
        } else {
          Alert.alert("Failure", "Unable to change password");
        }
      })
      .catch(e => {
        Alert.alert("Failure", e.message);
      })
  }

  return (
    <View style={styles.screen}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.boxContainer}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Change your password</Text>
          <Text style={styles.subText}>
            Enter your old password and a new password below to change your password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setOldPass}
            value={oldPass}
            placeholder="Old password"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="New password"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={changePass}>
            <Text style={styles.buttonText}>Change password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  boxContainer: {
    padding: 20, // Add padding around the container to the screen
    paddingTop: 0, // Keep padding top to 0 to remove space above the header
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 20, // Padding inside the container around the content
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    height: 50,
    backgroundColor: 'rgb(16,41,89)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChangePassword;
