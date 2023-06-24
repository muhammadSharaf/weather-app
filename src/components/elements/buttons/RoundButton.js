import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles/roundButton.style';

const RoundButton = ({
  title,
  isActive = true,
  onPress = () => {},
  style = {},
}) => {
  return (
    <TouchableOpacity
      disabled={!isActive}
      style={[styles.container, style, !isActive && styles.inactive]}
      onPress={() => onPress()}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
