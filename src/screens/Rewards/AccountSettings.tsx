// AccountSettings.tsx
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Modal, TextInput} from 'react-native';

// Placeholder components for TextField and Dropdown
// Replace these with your actual implementations
const TextField = ({placeholder}) => (
  <TextInput style={styles.input} placeholder={placeholder} />
);
const Dropdown = ({contents}) => (
  <View>{/* Render dropdown with contents */}</View>
);

const AccountSettings = () => {
  // State for storing user's information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // State for the confirmation modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Handlers for text changes
  // Add handlers for each field like the example below
  const handleFirstNameChange = text => setFirstName(text);

  // Handlers for dropdown changes
  // Add handlers for each dropdown like the example below
  const handleStateChange = value => setState(value);

  // Handler for the confirm button
  const handleConfirm = () => {
    setModalVisible(true);
  };

  // Handler for the save button in the modal
  const handleSave = () => {
    // Here you would normally call an API to save the data
    setModalVisible(false);
    // Save data to your state management or backend
  };

  // Handler for the cancel button in the modal
  const handleCancel = () => {
    setModalVisible(false);
    // Optionally reset state to initial values
  };

  return (
    <View style={styles.container}>
      {/* Input fields and labels */}
      {/* ... */}
      {/* Add the rest of your input fields and their respective state handlers here */}
      {/* ... */}
      <Button title="Confirm Changes" onPress={handleConfirm} />

      {/* Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to make these changes?
            </Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={handleCancel} />
              <Button title="Save" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles for your screen and components
const styles = StyleSheet.create({
  // Add your styles here
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  // Style for other components like TextField, Dropdown, etc.
  // ...
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  // Add styles for other components like labels and inputs
  label: {
    // your label style
  },
  input: {
    // your input style
  },
  stateCityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stateInput: {
    // style for state input container
  },
  cityInput: {
    // style for city input container
  },
});

export default AccountSettings;
