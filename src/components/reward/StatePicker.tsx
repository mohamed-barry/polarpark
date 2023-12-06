import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

interface StatePickerProps {
  value: string;
  onSelect: (state: string) => void;
  visible: boolean;
  onClose: () => void;
}

const statesList = [
  // Add all 50 states here as objects with a label and value
  {label: 'Alabama', value: 'AL'},
  // ... other states
];

const StatePicker: React.FC<StatePickerProps> = ({
  onSelect,
  visible,
  onClose,
}) => {
  const handleStateSelection = (state: string) => {
    onSelect(state);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.pickerContainer}>
          <FlatList
            data={statesList}
            keyExtractor={item => item.value}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.stateItem}
                onPress={() => handleStateSelection(item.value)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    maxHeight: 300,
    paddingVertical: 10,
  },
  stateItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default StatePicker;
