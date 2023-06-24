const locationsState = {
  currentLocation: {
    name: 'Cairo',
    country: 'EG',
    lat: 30.0443879,
    long: 31.2357257,
    temp: 0,
  },
  defaultLocation: {
    //in case user didn't allow location on first launch
    name: 'Cairo',
    country: 'EG',
    lat: 30.0443879,
    long: 31.2357257,
    temp: 0,
  },
  locations: [
    {
      name: 'London',
      country: 'GB',
      lat: 51.5073219,
      long: -0.1276474,
      temp: 0,
    },
    {
      name: 'Paris',
      country: 'FR',
      lat: 48.8588897,
      long: 2.3200410217200766,
      temp: 0,
    },
    {
      name: 'New York',
      country: 'US',
      lat: 40.7127281,
      long: -74.0060152,
      temp: 0,
    },
  ],
};

export default locationsState;
