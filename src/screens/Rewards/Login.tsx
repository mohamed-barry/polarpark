import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Header from '@app/components/reward/Header';
import MailIcon from '@app/assets/icons/rewards/mail-icon.png';
import LockIcon from '@app/assets/icons/rewards/password-icon.png';

interface Props {
  navigation: NavigationProp<any>;
}

const Login: React.FC<Props> = ({navigation}) => {
  const handleSignUp = () => {
    navigation.navigate('Signup');
  };
  const handleLoginClick = () => {
    navigation.navigate('Dashboard');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Login to WooSox Rewards</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <Image source={MailIcon} style={styles.inputIcon} />
          </View>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <Image source={LockIcon} style={styles.inputIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLoginClick}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>
          Not a member? <Text style={styles.signupLink}>Sign up now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Nunito Sans',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Nunito Sans',
    fontWeight: '500',
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
    fontFamily: 'Nunito Sans',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  inputIcon: {
    paddingLeft: 11,
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    fontFamily: 'Nunito Sans',
    paddingHorizontal: 20,
    height: 50,
    fontSize: 17,
  },
  button: {
    backgroundColor: 'rgb(16,41,89)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
  },
  signupText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
  },
  signupLink: {
    color: 'rgba(18, 103, 205, 1)',
    textDecorationLine: 'underline',
    fontFamily: 'Nunito Sans',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Nunito Sans',
  },
  forgotPassword: {
    color: 'rgba(18, 103, 205, 1)',
    textAlign: 'right',
    fontFamily: 'Nunito Sans',
  },
});

export default Login;
