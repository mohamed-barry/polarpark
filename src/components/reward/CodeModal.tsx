import React, {useState} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import SMILEY from '@app/assets/images/smiley-1.png'
import SvgIcon from '../ui/SvgIcon/SvgIcon';
import LeftArrow from '@app/assets/icons/ex-circle-icon.svg'

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
  const [scannedCode, setScannedCode] = useState('');

  const handleSuccess = (e: any) => {
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
            <SvgIcon SVG={LeftArrow} focused={true} size={24} />
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
    width: '90%',
    height: '50%',
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
