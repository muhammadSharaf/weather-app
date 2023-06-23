import React from 'react';
import ConditionCard from '../ConditionCard';
import {View} from 'react-native';
import styles from './styles/conditionsContainer.style';

const ConditionsContainer = ({list, isLoading}) => {
  const cards = list.map((condition, index) => {
    return (
      <ConditionCard
        key={index}
        title={condition.type}
        value={condition.value}
        isLoading={isLoading}
      />
    );
  });

  return <View style={styles.container}>{cards}</View>;
};

export default ConditionsContainer;
