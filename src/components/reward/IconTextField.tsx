import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface IconTextFieldProps {
  placeholder: string;
  icon: ImageSourcePropType;
  value?: string;
  onChange?: (arg0: string) => void;
}

const IconTextField: React.FC<IconTextFieldProps> = ({placeholder, icon, value, onChange}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused && styles.inputWrapperFocused]}>
      <View style={styles.inputIcon}>
        <Image source={icon} style={styles.icon} />
      </View>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputIcon: {
    marginLeft: 11,
    height: 20,
    width: 20,
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    padding: 10,
    fontFamily: 'Nunito Sans',
    fontSize: 15,
  },
  inputFocused: {
    borderColor: 'rgba(169, 7, 10, 1)',
  },
  inputWrapperFocused: {
    borderWidth: 1,
    borderColor: 'rgba(169, 7, 10, 1)',
  },
});

export default IconTextField;
