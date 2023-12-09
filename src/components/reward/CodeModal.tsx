import React from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons'; // Import your icon library
import SMILEY from '@app/assets/images/smiley-1.png'

interface CodeModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  userID: string;
}

const CodeModal: React.FC<CodeModalProps> = ({
  modalVisible,
  setModalVisible,
  userID
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView]}>
          <View style={styles.centeredView}>
            <QRCode 
              value={userID}
              logo={SMILEY}
              size={200}
            />
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
          {/* <Text style={styles.modalTitle}>Scan QR Code</Text> */}
          {/* Content of the modal */}
          {/* ... */}
          {/* <TouchableOpacity style={styles.startEarningButton}>
            <Text style={styles.buttonText}> Gain Points </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    width: '90%', // Use the percentage of screen width that suits your design
    height: '50%', // Use the percentage of screen height that suits your design
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startEarningButton: {
    backgroundColor: '#ADD8E6', // Light Blue color
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  // Add any other styles you might need
});

export default CodeModal;
