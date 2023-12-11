import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface DropdownProps {
  contents: string[];
}

const Dropdown: React.FC<DropdownProps> = ({contents}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.dropdown, isOpen && styles.dropdownFocused]}
        onPress={toggleDropdown}>
        <Text>{selectedItem || 'Select an option'}</Text>
        <Text style={styles.arrow}>↓</Text>
      </TouchableOpacity>
      {isOpen && (
        <ScrollView style={styles.dropdownContent}>
          {contents.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleItemClick(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
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
  dropdown: {
    padding: 10,
    fontFamily: 'Nunito Sans',
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownFocused: {
    borderColor: 'rgba(169, 7, 10, 1)',
  },
  arrow: {
    position: 'absolute',
    right: 10,
  },
  dropdownContent: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    maxHeight: 200,
    overflow: 'hidden',
  },
  item: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 5,
  },
});

export default Dropdown;
