import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import HourlyCard from '../HourlyCard';
import styles from '../styles/hourlyConditionsContainer.style';
import {WEATHER_ICONS} from '../../../constants/weatherConstants';
import {useSelector} from 'react-redux';
import {formatHh} from '../../../helpers/conversionHelper';
import Theme from '../../../theme/theme';

const WAVE = [100, 100, 120, 80, 140, 120, 100, 120, 140];
const PIVOT = [160, 40, 160, 70, 40, 120, 60, 100];

const HourlyConditionsContainer = ({isLoading}) => {
  const dayTime = useSelector(state => state.weatherReducer.dayTime);
  const [dayTimeData, setDayTime] = useState(dayTime);

  useEffect(() => {
    if (isLoading) {
      const currentHour = new Date().getHours();
      const hoursAheadData = dayTimeData.filter(
        time => time.time >= currentHour - 3,
      );
      setDayTime(hoursAheadData);
    } else {
      setDayTime(dayTime);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dayTimeData}
        renderItem={({item, index}) => (
          <HourlyCard
            key={index}
            time={formatHh(item.time)}
            temp={item.temp}
            state={WEATHER_ICONS[item.state]}
            color={Theme.dayTime[`TIME_${item.time}`]}
            isLoading={isLoading}
            svg={{
              y0: WAVE[index],
              y1: WAVE[index + 1],
              pivot: PIVOT[index],
            }}
          />
        )}
      />
    </View>
  );
};

export default HourlyConditionsContainer;
