import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/utils/AppBar';
import globalStyles from '../theme/global.style';
import WeatherPrev from '../components/weather/WeatherPrev';
import {getWeather, getWeatherForecast} from '../api/webService';

const HomeScreen = () => {
  const getCurrentWeather = async () => {
    getWeather(44.34, 10.99)
      .then(res => console.log('xxx', res))
      .catch(err => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getCurrentWeather();
    (async () => {
      const res = await getWeatherForecast(44.34, 10.99);
    })();
  }, []);

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View>
        <AppBar />
        <WeatherPrev />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
