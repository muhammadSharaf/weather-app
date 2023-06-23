const Theme = {
  dark: false,
  colors: {
    primary: '#142e5a',
    secondary: '#f38d64',
    background: '#f8f8f8',

    white: '#fff',
    shade: '#4b5e80',
    grey: '#525252',
    transparent: '#00000000',
  },
  shadows: {
    light: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    heavy: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  },
  dayTime: {
    TIME_0: {
      main: '#6c415b',
      shade: '#563049',
    },
    TIME_3: {
      main: '#915994',
      shade: '#873e8a',
    },
    TIME_6: {
      main: '#e1b2b7',
      shade: '#936368',
    },
    TIME_9: {
      main: '#f6a070',
      shade: '#d37f4e',
    },
    TIME_12: {
      main: '#ffb35a',
      shade: '#ff9548',
    },
    TIME_15: {
      main: '#d07898',
      shade: '#bb5e80',
    },
    TIME_18: {
      main: '#404c68',
      shade: '#304857',
    },
    TIME_21: {
      main: '#672b2b',
      shade: '#4f2929',
    },
  },
};

export default Theme;
