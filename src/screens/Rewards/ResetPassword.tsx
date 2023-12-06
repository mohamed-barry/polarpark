import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '@app/components/reward/Header';
import {NavigationProp} from '@react-navigation/native';

// You might need to replace this with the actual icon you're using
const eyeIcon = require('@app/assets/icons/rewards/eye-icon.png');

interface Props {
  navigation: NavigationProp<any>;
}

const ResetPassword: React.FC<Props> = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleResetPassword = () => {
    // Implement password reset functionality here
    console.log(password, confirmPassword);
    navigation.navigate('Dashboard');
  };

  const getPasswordStrength = () => {
    if (!confirmPassword) return {message: '', color: ''};
    if (
      confirmPassword.length < 6 ||
      !/[!@#$%^&*(),.?":{}|<>]/g.test(confirmPassword)
    ) {
      return {message: 'Weak', color: 'red'};
    }
    return {message: 'Strong', color: 'green'};
  };

  const onPasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    setPasswordsMatch(newPassword === confirmPassword);
  };

  // Update confirmPassword and check if passwords match
  const onConfirmPasswordChange = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(password === newConfirmPassword);
  };

  const passwordStrength = getPasswordStrength();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.description}>
          Set the new password for your account so you can login and access all
          the features.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onPasswordChange}
            secureTextEntry={!passwordVisible}
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}>
            <Image source={eyeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={onConfirmPasswordChange}
            secureTextEntry={!passwordVisible}
            placeholder="Confirm Password"
          />
          <Text
            style={{
              ...styles.strengthIndicator,
              color: passwordStrength.color,
            }}>
            {passwordStrength.message}
          </Text>
        </View>
        {!passwordsMatch && (
          <Text style={styles.passwordMismatchWarning}>
            Passwords do not match!
          </Text>
        )}
        <TouchableOpacity
          style={[styles.resetButton, !passwordsMatch && styles.buttonDisabled]}
          onPress={passwordsMatch ? handleResetPassword : undefined}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
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
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  eyeIcon: {
    marginLeft: -33,
  },
  strengthIndicator: {
    position: 'absolute',
    right: 10,
  },
  resetButton: {
    backgroundColor: 'rgba(169, 7, 10, 1)', // Example button color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  passwordMismatchWarning: {
    color: 'red',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonDisabled: {
    backgroundColor: 'grey',
    // Other styling for disabled state
  },
});

export default ResetPassword;
