import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface TextFieldProps {
  placeholder: string;
  value?: string;
  onChange?: (arg0: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [firstCharHandled, setFirstCharHandled] = useState(false);

  const handleChangeText = (text: string) => {
    let newValue = text;

    if (!firstCharHandled && text.length === 1) {
      newValue = text.toLowerCase();
      setFirstCharHandled(true);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setFirstCharHandled(false); // Reset on focus to handle first char again
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleFocus}
        value={value}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
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
