// SearchBox.tsx
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type SearchBoxProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Search for food"
        clearButtonMode="while-editing"
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure the button and input are aligned
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 40, // Set a fixed height for the input
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'rgb(16,41,89)', // Blue background
    borderRadius: 10, // Rounded edges
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  buttonText: {
    color: 'white', // White text
    fontSize: 16, // Slightly larger text
    fontWeight: '700',
  },
});

export default SearchBox;
