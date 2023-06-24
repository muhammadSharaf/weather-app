import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import styles from '../styles/drawerModal.style';
import Header from '../../components/utils/Header';
import Drawer from '../../components/elements/modals/Drawer';

const LocationsModal = ({navigation}) => {
  return (
    <Drawer>
      <View style={styles.container}>
        <Header title={'Locations'} />
      </View>
    </Drawer>
  );
};

export default LocationsModal;
