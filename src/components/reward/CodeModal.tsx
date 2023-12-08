import React, {useState} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

interface CodeModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CodeModal: React.FC<CodeModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [scannedCode, setScannedCode] = useState('');

  const handleSuccess = e => {
    setScannedCode(e.data);
    setModalVisible(false);
    Alert.alert('QR Code Scanned', e.data, [
      {
        text: 'Confirm',
        onPress: () => console.log('Confirm Pressed'),
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
          {scannedCode ? (
            <Text style={styles.modalText}>Scanned Code: {scannedCode}</Text>
          ) : (
            <QRCodeScanner
              onRead={handleSuccess}
              flashMode={RNCamera.Constants.FlashMode.auto}
              topContent={
                <Text style={styles.centerText}>
                  Go to{' '}
                  <Text style={styles.textBold}>
                    wikipedia.org/wiki/QR_code
                  </Text>{' '}
                  on your computer and scan the QR code.
                </Text>
              }
              bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                  <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
              }
            />
          )}
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
    margin: 20,
    width: '90%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
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
    backgroundColor: '#ADD8E6',
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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default CodeModal;
