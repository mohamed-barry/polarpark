import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '@app/components/reward/Header';
import IconTextField from '@app/components/reward/IconTextField';
import MailIcon from '@app/assets/icons/rewards/mail-icon.png';
import LockIcon from '@app/assets/icons/rewards/password-icon.png';
import WhiteLockIcon from '@app/assets/icons/rewards/lock-icon.png';

interface Props {
  handleLoginClick: () => void,
  handleSignUpClick: (user: string, password:string) => void
}

type FormError = {
  showError: boolean,
  errorMsg: string
}

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

function Confirmation ({handleLoginClick, handleSignUpClick}: Props): JSX.Element {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState<FormError>({showError: false, errorMsg: ""});

  const signUpClick = () => {
    if (password != confirm) {
      console.log(password + " " + confirm);
      setErrorMsg({
        showError: true,
        errorMsg: "Passwords do not match!"
      })
    } else if (!emailReg.test(email)) {
      setErrorMsg({
        showError: true,
        errorMsg: "Invalid Email!"
      })
    } else {
      handleSignUpClick(email, password);
    }
  }

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
        <IconTextField placeholder="Email" icon={MailIcon} value={email} onChange={setEmail} />
        <Text style={styles.label}>Password:</Text>
        <IconTextField placeholder="Password" icon={LockIcon} value={password} onChange={setPassword} />
        <Text style={styles.label}>Confirm Password:</Text>
        <IconTextField placeholder="Confirm Password" icon={LockIcon} value={confirm} onChange={setConfirm}/>
      </View>

      {errorMsg.showError && 
        <View style={[styles.redeemBox]}>
          <Text>{errorMsg.errorMsg}</Text>
        </View>} 

      <TouchableOpacity style={styles.button} onPress={signUpClick}>
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
  redeemBox: {
    width: '100%',
    backgroundColor: 'lightcoral',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Confirmation;
