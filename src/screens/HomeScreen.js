import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/utils/AppBar';
import globalStyles from '../theme/global.style';
import CurrentWeatherContainer from '../components/weather/containers/CurrentWeatherContainer';
import ForecastContainer from '../components/weather/containers/ForecastContainer';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppBar />
        <CurrentWeatherContainer />
        <ForecastContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
