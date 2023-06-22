import HomeScreen from '../screens/HomeScreen';

export const SCREENS = {
  MAIN: {
    HOME: 'HOME',
    INTRO: 'INTRO',
  },
};

export const ScreensContainer = new Array(Object.keys(SCREENS).length);

ScreensContainer[SCREENS.MAIN.HOME] = HomeScreen;
// ScreensContainer[SCREENS.MAIN.INTRO] = IntroScreen;
