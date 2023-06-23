const Theme = {
  dark: false,
  colors: {
    primary: '#142e5a',
    secondary: '#f38d64',
    background: '#f8f8f8',

    white: '#fff',
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
};

export default Theme;
