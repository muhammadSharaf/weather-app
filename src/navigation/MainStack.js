import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS, ScreensContainer} from './SCREENS';

const RootStack = createStackNavigator();

export default function MainStack() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        orientation: 'portrait',
      }}>
      <RootStack.Screen
        name={SCREENS.MAIN.HOME}
        component={ScreensContainer[SCREENS.MAIN.HOME]}
      />
      <RootStack.Screen
        name={SCREENS.MAIN.SETTINGS}
        component={ScreensContainer[SCREENS.MAIN.SETTINGS]}
      />
      <RootStack.Screen
        name={SCREENS.MAIN.CITIES}
        component={ScreensContainer[SCREENS.MAIN.CITIES]}
      />
    </RootStack.Navigator>
  );
}
