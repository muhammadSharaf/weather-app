import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/utils/AppBar';
import globalStyles from '../theme/global.style';
import WeatherInfo from '../components/weather/WeatherInfo';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView>
        <AppBar />
        <WeatherInfo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
