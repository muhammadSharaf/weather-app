import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CitiesScreen from '../screens/CitiesScreen';
import LocationsModal from '../screens/modals/LocationsModal';

export const SCREENS = {
  MAIN: {
    HOME: 'HOME',
    SETTINGS: 'SETTINGS',
    CITIES: 'CITIES',
  },
  MODALS: {
    LOCATION: 'LOCATION',
  },
};

export const ScreensContainer = [];

ScreensContainer[SCREENS.MAIN.HOME] = HomeScreen;
ScreensContainer[SCREENS.MAIN.SETTINGS] = SettingsScreen;
ScreensContainer[SCREENS.MAIN.CITIES] = CitiesScreen;
ScreensContainer[SCREENS.MODALS.LOCATION] = LocationsModal;
