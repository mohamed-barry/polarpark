import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface TextFieldProps {
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    width: '100%',
  },
  input: {
    padding: 10,
    fontFamily: 'Nunito Sans',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputFocused: {
    borderColor: 'rgba(169, 7, 10, 1)',
  },
});

export default TextField;
