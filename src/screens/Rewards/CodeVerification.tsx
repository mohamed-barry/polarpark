import {NavigationProp} from '@react-navigation/native';
import React, {createRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '@app/components/reward/Header';

interface Props {
  navigation: NavigationProp<any>;
}

const CodeVerification: React.FC<Props> = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [
    createRef<TextInput>(),
    createRef<TextInput>(),
    createRef<TextInput>(),
    createRef<TextInput>(),
  ];

  const handleCodeInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleSubmit = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.infoContainer}>
        <Text style={styles.headerText}>Enter 4 Digits Code</Text>
        <Text style={styles.subText}>
          Enter the 4 digits code that you received on your email.
        </Text>
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={text => handleCodeInput(text, index)}
              value={digit}
              returnKeyType="done"
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 0,
    marginTop: 0,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: '80%',
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

export default CodeVerification;
