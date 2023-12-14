import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

interface PrizeModalProps {
  visible: boolean;
  onClose: () => void;
  onRedeem: () => void;
}

export function PrizeModal({visible, onClose, onRedeem}: PrizeModalProps): JSX.Element {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Are you sure you would like to redeem this prize?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'red'}]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'green'}]}
              onPress={onRedeem}>
              <Text style={styles.buttonText}>Redeem</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

type PrizePromptProps = {
  message: string;
  visible: boolean;
  success: boolean;
  onClose: () => void;
}

export function PrizePrompt({message, visible, success, onClose}: PrizePromptProps): JSX.Element {
  const text = success ? "Prize Redeem Successful: " : "Prize Redeem Failed:"

  return (<Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          {text + message}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>)
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: 'rgb(16, 41, 89)',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
