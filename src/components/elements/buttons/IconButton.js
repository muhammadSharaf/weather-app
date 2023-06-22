import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles/iconButton.style';
import {CustomIcon} from '../custom-icon/CustomIcon';

const IconButton = ({icon, onPress = () => {}, size = 24, style = {}}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress()}>
      <CustomIcon name={icon} size={size} style={styles.icon}/>
    </TouchableOpacity>
  );
};

export default IconButton;
