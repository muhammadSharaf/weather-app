import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/hourTempCard.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import SvgWave from '../elements/custom/SvgWave';
import DIMENSIONS from '../../theme/dimensions';

const HourlyCard = ({time, temp, state, color, y0, y1, pivot}) => {
  console.log('state', state);

  return (
    <View style={[styles.container, {backgroundColor: color.main}]}>
      <SvgWave
        width={DIMENSIONS.HOURLY_CARD_W}
        height={200}
        y0={y0}
        y1={y1}
        pivot={pivot}
        color={color.shade}
        opacity={0.1}
      />
      <Text style={styles.time}>{time}</Text>
      <CustomIcon name={state} style={styles.icon} />
      <Text style={styles.tmp}>{temp}</Text>
    </View>
  );
};

export default HourlyCard;
