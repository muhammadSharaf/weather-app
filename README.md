## Table of Content

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Flow](#flow)
6. [Dependencies](#dependencies)
7. [References](#references)

## Introduction
A react native application for fetching weather state  for any location including 5 Day / 3 Hour forecasted data.
## Installation
```sh
git clone https://github.com/muhammadSharaf/weather-app.git
npm install
```
For Android:
```sh
npx react-native run-android
```
For ios:
```sh
npx react-native setup-ios-permissions
npx react-native run-ios
```
## Project Structure
```
WeatherApp (Root Dir)
│   README.md
│   index.js (application entry point)    
│   App.js (main Component, has only navigation logic)
│   .env (for keeping sensitive config data)
|   
|   
└───assets (containing fonts for typography and icons)
|   
└───store
|   │   actions.js
|   │   configureStore.js (configuration and export)
|   |   constants.js
|   |   reducers.js
|   |   state.js
|
└───src
|   │   
│   │  
│   └───api
│   |    │───webService.js
│   |    │───constants
│   │  
│   └───components  
│   |    │───elements (custom components)
│   |    │───utils
│   |    │───locations (locations related components)
│   |    │───weather (weather related components)
│   │  
│   └───constants
│   │  
│   └───helpers
│   │  
│   └───navigation
│   |    │───MainStack.js
│   |    │───SCREENS (constants file to to simplify navigation)
│   │  
│   └───screens
│   |    │───...Main app screens
│   |    │───Modals
│   │  
│   └───store
│   |    │───slices 
│   |    │───states
│   |    │  store.js
│   │  
│   └───theme
│   |    │───dimensions 
│   |    │───fonts
│   |    │───global.style
│   |    │───theme.js (containing colors)
```
## Features
- Forecasted each 3 hours temperature and condition (only beyond current time).
- Forecasted 4~5 days temperature and condition.
- Swipe to refresh data.
- Imperial/Metric Measurement units with realtime conversions.
- Ability to use current device location .
- Best match recommendation when adding inaccurate location name.
- List of Recent locations up to 10(customizable) location.
- Persisting data even if app is closed (current location - recent locations - measurement units) 

## Flow
- **HomeScreen** contains current day weather data along with forecasted 5 day / 3 hours weather data.
- **HomeScreen** app bar can navigate either to **SettingsScreen** or **LocationsModal**.
- From **SettingsScreen**, you can change measurement units which will reflect realtime to existing data and future fetched data.
- **LocationsModal** has:
  - Current selected location.
  - Add new location using entered location name or device location. (recommends best match for inaccurate location names)
  - Recent locations which can be pressed to toggle with current selected location.

## Dependencies
1. Axios
2. Redux / Redux Toolkit / Redux Persist
3. RN Navigation
4. RN Config
5. Vector Icons (Icomoon)
6. RN Permissions
7. RN Geolocation Service

[Watch demo for iOS](https://ibb.co/7yXCxX9)
[Watch demo for Android](https://ibb.co/rthx9LV)

## References
This Project Uses OpenWeather Free API: api.openweathermap.org
