import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CitiesScreen from '../screens/CitiesScreen';

export const SCREENS = {
  MAIN: {
    HOME: 'HOME',
    SETTINGS: 'SETTINGS',
    CITIES: 'CITIES',
  },
};

export const ScreensContainer = new Array(Object.keys(SCREENS).length);

ScreensContainer[SCREENS.MAIN.HOME] = HomeScreen;
ScreensContainer[SCREENS.MAIN.SETTINGS] = SettingsScreen;
ScreensContainer[SCREENS.MAIN.CITIES] = CitiesScreen;
