import React from 'react';
import {View, FlatList} from 'react-native';
import HourlyCard from '../HourlyCard';
import styles from '../styles/hourlyConditionsContainer.style';
import {DAYTIME_COLORS} from '../../../constants/weatherConstants';
import {useSelector} from 'react-redux';
import { formatHh } from "../../../helpers/conversionHelper";

const WAVE = [100, 100, 120, 80, 140, 120, 100, 120, 140];
const PIVOT = [160, 40, 160, 70, 40, 120, 60, 100];

const HourlyConditionsContainer = () => {
  const dayTime = useSelector(state => state.weatherReducer.dayTime);
  console.log('dayTime xx', dayTime);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dayTime}
        renderItem={({item, index}) => (
          <HourlyCard
            key={index}
            time={formatHh(item.time)}
            temp={item.temp}
            color={DAYTIME_COLORS[`TIME_${item.time}`]}
            y0={WAVE[index]}
            y1={WAVE[index + 1]}
            pivot={PIVOT[index]}
          />
        )}
      />
    </View>
  );
};

export default HourlyConditionsContainer;
