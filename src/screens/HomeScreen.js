import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/utils/AppBar';
import globalStyles from '../theme/global.style';
import CurrentWeatherContainer from '../components/weather/containers/CurrentWeatherContainer';
import ForecastContainer from '../components/weather/containers/ForecastContainer';
import {getCurrentWeather, getForecast} from '../store/slices/weatherSlice';
import Theme from '../theme/theme';
import IconButton from '../components/elements/buttons/IconButton';
import {SCREENS} from '../navigation/SCREENS';
import MsgContainer from "../components/elements/modals/MsgContainer";

const HomeScreen = ({navigation}) => {
  const state = useStore().getState();

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
      <MsgContainer />
    </SafeAreaView>
  );
};

export default HomeScreen;
