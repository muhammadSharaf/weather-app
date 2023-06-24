import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles/switchButton.style';

const SwitchButton = ({
  titleLeft,
  titleRight,
  isLeftToggled = true,
  isActive = true,
  onPressLeft = () => {},
  onPressRight = () => {},
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          styles.left,
          isLeftToggled && styles.selected,
        ]}
        onPress={() => onPressLeft()}>
        <Text style={[styles.title, isLeftToggled && styles.selectedTitle]}>
          {titleLeft}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          styles.right,
          !isLeftToggled && styles.selected,
        ]}
        onPress={() => onPressRight()}>
        <Text style={[styles.title, !isLeftToggled && styles.selectedTitle]}>
          {titleRight}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchButton;
