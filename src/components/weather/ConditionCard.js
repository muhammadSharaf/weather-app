import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/conditionCard.style';
import Separator from '../elements/custom/Separator';
import Loader from '../elements/custom/Loader';

const ConditionCard = ({title, value, isLoading}) => {
  return (
    <View style={styles.container}>
      <Separator margin={8} />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        {isLoading ? (
          <>
            <View style={styles.loader}>
              <Loader size={'small'} />
            </View>
            <Text style={styles.value}>{'‎ '}</Text>
          </>
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
      </View>
    </View>
  );
};

export default ConditionCard;
