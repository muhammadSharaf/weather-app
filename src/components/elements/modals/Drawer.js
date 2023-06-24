import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles/drawer.style';

const DrawerModal = ({
  children,
  isVisible,
  onClose = () => {},
  modalStyle,
  animationIn = 'slideInLeft',
  animationOut = 'slideOutLeft',
}) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => onClose()}
        onBackdropPress={() => onClose()}
        animationIn={animationIn}
        animationOut={animationOut}
        style={[styles.modal, modalStyle]}>
        {children}
      </Modal>
    </View>
  );
};

export default DrawerModal;
