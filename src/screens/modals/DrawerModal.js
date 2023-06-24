import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {Text, View} from 'react-native';

import styles from '../styles/drawerModal.style';
import Header from '../../components/utils/Header';

const DrawerModal = ({navigation}) => {
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
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        style={styles.modal}>
        <View style={styles.content}>
          <Header title={'Locations'} />
        </View>
      </Modal>
    </View>
  );
};

export default DrawerModal;
