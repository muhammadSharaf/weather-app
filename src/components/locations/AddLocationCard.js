import React, {useState} from 'react';
import {PermissionsAndroid, Platform, TextInput, View} from 'react-native';
import Permissions, {
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import Theme from '../../theme/theme';
import styles from './styles/addLocationCard.style';
import IconButton from '../elements/buttons/IconButton';
import RoundButton from '../elements/buttons/RoundButton';
import {checkMultiplePermissions} from '../../helpers/permissionHelper';
import {useDispatch} from 'react-redux';
import {clearMsg, showMsg} from '../../store/slices/runTimeSlice';
import {MSG_CONSTANTS} from '../../constants/runTimeConstants';

const AddLocationCard = ({onAddLocation = () => {}, onAddGeo = () => {}}) => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState('');

  const getGeoLocation = async () => {
    const isPermissionGranted = await checkMultiplePermissions(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
        : [
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
          ],
    );

    if (!isPermissionGranted) {
      dispatch(
        showMsg({
          title: MSG_CONSTANTS.TITLE.ERROR,
          color: Theme.colors.msg.error,
          msg: 'Location permission is not granted.',
          activeBtnTitle: MSG_CONSTANTS.CONTROLS.OK,
          closable: true,
        }),
      );
      return;
    }

    dispatch(
      showMsg({
        title: MSG_CONSTANTS.TITLE.NOTE,
        color: Theme.colors.msg.info,
        msg: 'Please wait...',
        closable: false,
      }),
    );

    Geolocation.getCurrentPosition(
      position => {
        dispatch(clearMsg());

        const {latitude, longitude} = position.coords;
        onAddGeo(latitude, longitude);
      },
      error => {
        // See error code charts below.
        dispatch(
          showMsg({
            title: MSG_CONSTANTS.TITLE.ERROR,
            color: Theme.colors.msg.error,
            msg: error.message,
            activeBtnTitle: MSG_CONSTANTS.CONTROLS.OK,
            closable: true,
          }),
        );
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Add new location'}
          placeholderTextColor={Theme.colors.shade}
          selectionColor={Theme.colors.primary}
          style={styles.input}
          value={inputVal}
          onChangeText={input => setInputVal(input)}
          onSubmitEditing={() => onAddLocation(inputVal)}
        />
        <IconButton icon={'my-location'} onPress={() => getGeoLocation()} />
      </View>
      <RoundButton
        title={'Add'}
        style={styles.addBtn}
        narrow={true}
        isActive={inputVal && inputVal.trim().length > 0}
        onPress={() => onAddLocation(inputVal)}
      />
    </View>
  );
};

export default AddLocationCard;
