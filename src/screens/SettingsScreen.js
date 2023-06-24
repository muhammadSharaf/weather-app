import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useStore} from 'react-redux';
import globalStyles from '../theme/global.style';
import AppBar from '../components/utils/AppBar';
import IconButton from '../components/elements/buttons/IconButton';
import Header from '../components/utils/Header';
import {SCREENS} from '../navigation/SCREENS';
import RoundButton from '../components/elements/buttons/RoundButton';
import styles from './styles/settingsScreen.style';
import SwitchButton from '../components/elements/buttons/SwitchButton';
import {MEASURE_UNIT} from '../constants/units';
import {changeUnit} from '../store/slices/settingsSlice';

const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const unit = useStore().getState().settingsReducer.unit;

  const [hasChanges, setHasChanges] = useState(false);

  const [unitsState, setUnitsState] = useState(unit.type);

  useEffect(() => {
    if (unitsState !== unit.type) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [unitsState]);

  const onChangeUnits = type => {
    if (unitsState !== type) {
      setUnitsState(type);
    }
  };

  const onSave = () => {
    if (unitsState !== unit.type) {
      dispatch(changeUnit(unitsState));

      setHasChanges(false)
    }
  };

  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <AppBar
            left={
              <IconButton icon={'back'} onPress={() => navigation.goBack()} />
            }
            middle={<Header title={SCREENS.MAIN.SETTINGS} />}
          />

          <View style={styles.content}>
            <Header title={'Measurement units'} subHeader={true} />
            <SwitchButton
              titleLeft={MEASURE_UNIT.IMPERIAL.type}
              titleRight={MEASURE_UNIT.METRIC.type}
              onPressLeft={() => onChangeUnits(MEASURE_UNIT.IMPERIAL.type)}
              onPressRight={() => onChangeUnits(MEASURE_UNIT.METRIC.type)}
              isLeftToggled={unitsState === MEASURE_UNIT.IMPERIAL.type}
            />
          </View>
        </View>

        <RoundButton
          title={'Save'}
          isActive={hasChanges}
          onPress={() => onSave()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
