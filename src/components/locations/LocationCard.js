import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import styles from './styles/locationCard.style';
import Theme from '../../theme/theme';

const LocationCard = ({
  city,
  state,
  temp,
  onPress = () => {},
  containerStyle = {},
  isPressable = true,
}) => {
  return (
    <TouchableHighlight
      disabled={!isPressable}
      style={[styles.container, containerStyle]}
      underlayColor={Theme.colors.border}
      onPress={() => onPress()}>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{`${city}, ${state}`}</Text>
        <Text style={styles.temp}>{temp}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default LocationCard;
