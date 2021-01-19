import React from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';

// COMPONENTS
import Screen from './Screen';

interface AppModalProps {
  visible: boolean;
  children: React.ReactNode;
  animationType: 'slide' | 'fade' | 'none';
  hideModal: () => void;
}

const AppModal = ({
  visible,
  hideModal,
  animationType,
  children,
}: AppModalProps): JSX.Element => {
  return (
    <Modal animationType={animationType} transparent={true} visible={visible}>
      <TouchableOpacity style={styles.modalBackground} onPress={hideModal}>
        <Screen>{children}</Screen>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default AppModal;
