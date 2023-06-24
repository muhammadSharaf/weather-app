import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles/roundButton.style';

const RoundButton = ({
  title,
  isActive = true,
  narrow = false,
  onPress = () => {},
  style = {},
}) => {
  return (
    <TouchableOpacity
      disabled={!isActive}
      style={[
        styles.container,
        style,
        narrow && styles.narrow,
        !isActive && styles.inactive,
      ]}
      onPress={() => onPress()}>
      <Text style={narrow ? styles.titleNarrow : styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
