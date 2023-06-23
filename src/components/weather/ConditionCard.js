import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/conditionCard.style';
import Separator from '../elements/custom/Separator';

const ConditionCard = ({title, value, width}) => {
  return (
    <View style={[styles.container, width && {width}]}>
      <Separator margin={8} />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default ConditionCard;
