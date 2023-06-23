import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/hourTempCard.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import SvgWave from '../elements/custom/SvgWave';
import DIMENSIONS from '../../theme/dimensions';
import Loader from '../elements/custom/Loader';
import Theme from '../../theme/theme';

const HourlyCard = ({time, temp, state, color, isLoading, svg}) => {
  const {y0, y1, pivot} = svg;

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
      <CustomIcon
        name={state}
        style={[styles.icon, isLoading && styles.transparent]}
      />
      <Text style={[styles.tmp, isLoading && styles.transparent]}>{temp}</Text>

      {isLoading && (
        <View style={styles.loader}>
          <Loader color={Theme.colors.white} />
        </View>
      )}
    </View>
  );
};

export default HourlyCard;
