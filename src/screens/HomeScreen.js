import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/utils/AppBar';
import globalStyles from '../theme/global.style';
import WeatherPrev from '../components/weather/WeatherPrev';

const HomeScreen = () => {
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
