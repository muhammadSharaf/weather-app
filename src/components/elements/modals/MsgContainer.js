import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles/msgContainer.style';
import Header from '../../utils/Header';
import {useDispatch, useSelector} from 'react-redux';
import {clearMsg} from '../../../store/slices/runTimeSlice';

const MsgContainer = () => {
  const dispatch = useDispatch();
  const msgContent = useSelector(state => state.runTimeReducer.msg);
  const {
    isVisible,
    title,
    titleColor,
    msg,
    activeBtnTitle,
    passiveBtnTitle,
    activeCallBack,
    passiveCallBack,
    onClose,
    closable,
  } = msgContent;

  console.log('closable', closable);

  const closeModal = () => {
    if (!closable) {
      return;
    }

    onClose && onClose();
    dispatch(clearMsg());
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackButtonPress={() => closeModal()}
        onBackdropPress={() => closeModal()}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropOpacity={0.3}
        style={styles.modal}>
        <View style={styles.content}>
          <View>
            <Header title={title} color={titleColor} />

            <Text style={styles.msg}>{msg}</Text>
          </View>

          <View style={styles.controlsContainer}>
            {activeBtnTitle && (
              <TouchableOpacity
                onPress={() => {
                  activeCallBack();
                  closeModal();
                }}>
                <Text style={styles.activeControl}>{activeBtnTitle}</Text>
              </TouchableOpacity>
            )}
            {passiveBtnTitle && (
              <TouchableOpacity
                onPress={() => {
                  passiveCallBack();
                  closeModal();
                }}>
                <Text style={styles.activeControl}>{passiveBtnTitle}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MsgContainer;
