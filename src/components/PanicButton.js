import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PanicButton() {
  const [visible, setVisible] = useState(false);

  const onPress = () => {
    setVisible(true);
  };

  const confirmPanic = () => {
    setVisible(false);
    // TODO: Replace with real alert logic (location + API call)
    console.log('⚠️ Panic button pressed!');
    Alert.alert('Emergency alert sent!', 'Your trusted contacts have been notified.');
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Panic</Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Send emergency alert?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setVisible(false)} style={styles.modalButton}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmPanic} style={[styles.modalButton, styles.confirm]}>
                <Text style={{ color: 'white' }}>Yes, Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const SIZE = 100;
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  button: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    padding: 10,
    marginLeft: 10,
  },
  confirm: {
    backgroundColor: '#e74c3c',
    borderRadius: 4,
  },
});

