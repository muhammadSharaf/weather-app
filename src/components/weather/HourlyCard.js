import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/hourTempCard.style';
import { CustomIcon } from "../elements/custom-icon/CustomIcon";

const HourlyCard = ({time, temp, color}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>18:00</Text>
      <CustomIcon name={'rainy'} size={64}/>
      <Text style={styles.tmp}>26</Text>
    </View>
  );
};

export default HourlyCard;
