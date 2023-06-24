import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';

import styles from '../styles/locationModal.style';
import Header from '../../components/utils/Header';
import Drawer from '../../components/elements/modals/Drawer';
import LocationCard from '../../components/locations/LocationCard';
import Separator from '../../components/elements/custom/Separator';
import Theme from '../../theme/theme';
import AddLocationCard from '../../components/locations/AddLocationCard';
import {
  changeLocation,
  queryLocation,
  queryLocationByCord,
} from '../../store/slices/locationsSlice';

const LocationsModal = ({navigation}) => {
  const dispatch = useDispatch();
  const unit = useStore().getState().settingsReducer.unit;
  const locationsContainer = useSelector(state => state.locationsReducer);
  const {currentLocation, locations} = locationsContainer;

  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      navigation.goBack();
    }
  }, [isVisible]);

  const onAddLocation = location => {
    dispatch(queryLocation(location, () => closeModal()));
  };

  const onAddGeo = (lat, long) => {
    dispatch(queryLocationByCord(lat, long, () => closeModal()));
  };

  const onChangeLocation = (name, country) => {
    dispatch(changeLocation(name, country));
    closeModal();
  };

  const locationsList = useCallback(
    () =>
      locations.map((location, index) => {
        return (
          <LocationCard
            key={index}
            city={location.name}
            state={location.country}
            temp={location.temp ? `${location.temp}${unit.tempSymbol}` : ''}
            containerStyle={styles.currentLocation}
            onPress={() => onChangeLocation(location.name, location.country)}
          />
        );
      }),
    [locations],
  );

  return (
    <Drawer isVisible={isVisible} onClose={() => closeModal()}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header title={'Locations'} />
        <View style={styles.section}>
          <Header title={'Current location'} subHeader={true} />

          <LocationCard
            city={currentLocation.name}
            state={currentLocation.country}
            temp={`${currentLocation.temp}${unit.tempSymbol}`}
            containerStyle={styles.currentLocation}
            isPressable={false}
          />
        </View>
        <Separator
          horizontal={true}
          length={'100%'}
          color={Theme.colors.border}
        />

        <AddLocationCard
          onAddLocation={loc => onAddLocation(loc)}
          onAddGeo={(lat, long) => onAddGeo(lat, long)}
        />

        <Separator
          horizontal={true}
          length={'100%'}
          color={Theme.colors.border}
        />

        <View style={styles.section}>
          <Header title={'Recent locations'} subHeader={true} />

          {locations.length > 0 ? (
            locationsList()
          ) : (
            <Text style={styles.emptyRecent}>
              {'No recent locations found'}
            </Text>
          )}
        </View>
      </ScrollView>
    </Drawer>
  );
};

export default LocationsModal;
