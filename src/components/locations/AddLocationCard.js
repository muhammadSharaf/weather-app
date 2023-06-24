import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Theme from '../../theme/theme';
import styles from './styles/addLocationCard.style';
import IconButton from '../elements/buttons/IconButton';
import RoundButton from '../elements/buttons/RoundButton';

const AddLocationCard = ({onAddLocation = () => {}}) => {
  const [inputVal, setInputVal] = useState('');

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
        <IconButton icon={'my-location'} />
      </View>
      <RoundButton
        title={'Add'}
        style={styles.addBtn}
        narrow={true}
        isActive={inputVal && inputVal.length > 0}
        onPress={() => onAddLocation(inputVal)}
      />
    </View>
  );
};

export default AddLocationCard;
