import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

import styles from './styles/drawer.style';

const DrawerModal = ({
  children,
  modalStyle,
  animationIn = 'slideInLeft',
  animationOut = 'slideOutLeft',
}) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      navigation.goBack();
    }
  }, [isVisible]);

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => closeModal()}
        onBackdropPress={() => closeModal()}
        animationIn={animationIn}
        animationOut={animationOut}
        style={[styles.modal, modalStyle]}>
        {children}
      </Modal>
    </View>
  );
};

export default DrawerModal;
