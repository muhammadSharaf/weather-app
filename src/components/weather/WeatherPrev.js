import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {getWeatherIcon} from '../../helpers/weatherHelper';
import Loader from '../elements/custom/Loader';
import {useStore} from 'react-redux';

const WeatherPrev = ({weather, city, isLoading}) => {
  const {temp} = weather.main || 0.0;
  const {main: condition} = weather.state || {};
  const {name, code} = city;

  const unit = useStore().getState().settingsReducer.unit;

  return (
    <View style={styles.container}>
      <CustomIcon name={getWeatherIcon(condition)} style={styles.icon} />

      <Text style={styles.tmp}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {temp}
            <Text style={styles.unit}>{unit.temperature}</Text>
          </>
        )}
      </Text>

      <Text style={styles.cityName}>{`${name}, ${code}`}</Text>
    </View>
  );
};

export default WeatherPrev;
