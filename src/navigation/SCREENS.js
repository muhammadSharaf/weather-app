import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CitiesScreen from '../screens/CitiesScreen';
import DrawerModal from '../screens/modals/DrawerModal';

export const SCREENS = {
  MAIN: {
    HOME: 'HOME',
    SETTINGS: 'SETTINGS',
    CITIES: 'CITIES',
    DRAWER: 'DRAWER',
  },
};

export const ScreensContainer = new Array(Object.keys(SCREENS).length);

ScreensContainer[SCREENS.MAIN.HOME] = HomeScreen;
ScreensContainer[SCREENS.MAIN.SETTINGS] = SettingsScreen;
ScreensContainer[SCREENS.MAIN.CITIES] = CitiesScreen;
ScreensContainer[SCREENS.MAIN.DRAWER] = DrawerModal;
