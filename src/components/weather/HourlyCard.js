import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/hourTempCard.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import SvgWave from '../elements/custom/SvgWave';
import DIMENSIONS from '../../theme/dimensions';
import {formatHh} from '../../helpers/conversionHelper';

const HourlyCard = ({time, temp, color, y0, y1, pivot}) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <SvgWave
        width={DIMENSIONS.HOURLY_CARD_W}
        height={200}
        y0={y0}
        y1={y1}
        pivot={pivot}
        opacity={0.1}
      />
      <Text style={styles.time}>{time}</Text>
      <CustomIcon name={'rainy'} size={64} />
      <Text style={styles.tmp}>{temp}</Text>
    </View>
  );
};

export default HourlyCard;
