import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/forecastedDay.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {DAYS} from '../../constants/units';
import globalStyle from '../../theme/global.style';
import {getWeatherIcon} from '../../helpers/weatherHelper';

const ForecastedDay = ({dayIdx, day, unit}) => {
  const {temp, state} = day;

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.flex3, styles.text]}>{DAYS[dayIdx]}</Text>
      <View style={[globalStyle.flex3, styles.weatherStateContainer]}>
        <CustomIcon
          name={getWeatherIcon(state)}
          size={24}
          style={styles.icon}
        />
        <Text style={styles.text}>{state}</Text>
      </View>
      <Text style={[globalStyle.flex, styles.text]}>{`${temp}${unit.tempSymbol}`}</Text>
    </View>
  );
};

export default ForecastedDay;
