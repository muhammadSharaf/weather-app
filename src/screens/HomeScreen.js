import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useDispatch, useStore} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/utils/AppBar';
import globalStyles from '../theme/global.style';
import CurrentWeatherContainer from '../components/weather/containers/CurrentWeatherContainer';
import ForecastContainer from '../components/weather/containers/ForecastContainer';
import {getCurrentWeather, getForecast} from '../store/slices/weatherSlice';
import Theme from '../theme/theme';
import IconButton from '../components/elements/buttons/IconButton';
import {SCREENS} from '../navigation/SCREENS';

const HomeScreen = ({navigation}) => {
  //TODO error handling
  //TODO cities

  const state = useStore().getState();
  console.log(state);

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getCurrentWeather());
    dispatch(getForecast());

    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  };

  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Theme.colors.primary]}
            tintColor={Theme.colors.primary}
          />
        }>
        <AppBar
          left={
            <IconButton
              icon={'menu'}
              onPress={() => navigation.navigate(SCREENS.MODALS.LOCATION)}
            />
          }
          right={
            <IconButton
              icon={'settings'}
              onPress={() => navigation.navigate(SCREENS.MAIN.SETTINGS)}
            />
          }
        />

        <CurrentWeatherContainer />
        <ForecastContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
