import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '@app/components/reward/Header';
import {NavigationProp} from '@react-navigation/native';
import IconTextField from '@app/components/reward/IconTextField';
import MailIcon from '@app/assets/icons/rewards/mail-icon.png';
import LockIcon from '@app/assets/icons/rewards/password-icon.png';
import WhiteLockIcon from '@app/assets/icons/rewards/lock-icon.png';

interface Props {
  navigation: NavigationProp<any>;
}

const Confirmation: React.FC<Props> = ({navigation}) => {
  const handleLoginClick = () => {
    navigation.navigate('Login');
  };
  const handleSignUpClick = () => {
    navigation.navigate('CongratSignUp');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Earn rewards now</Text>
      <TouchableOpacity onPress={handleLoginClick}>
        <Text style={styles.loginText}>
          Already signed up? <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <IconTextField placeholder="Email" icon={MailIcon} />
        <Text style={styles.label}>Password:</Text>
        <IconTextField placeholder="Password" icon={LockIcon} />
        <Text style={styles.label}>Confirm Password:</Text>
        <IconTextField placeholder="Confirm Password" icon={LockIcon} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUpClick}>
        <Image source={WhiteLockIcon} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Sign up</Text>
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
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans',
  },
  loginText: {
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 15,
  },
  loginLink: {
    color: 'rgba(169, 7, 10, 1)',
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans',
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    marginBottom: 10,
    fontSize: 15,
    fontFamily: 'Nunito Sans',
    fontWeight: '500',
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
    marginBottom: 10,
  },
  inputIcon: {
    paddingLeft: 11,
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    height: 50,
    fontSize: 17,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgb(16,rgba(169, 7, 10, 1)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
  },
  buttonIcon: {
    height: 25,
    width: 25,
  },
});

export default Confirmation;
