import React from 'react';
import HourlyCard from '../HourlyCard';
import {View, FlatList} from 'react-native';
import styles from '../styles/hourlyConditionsContainer.style';

const HourlyConditionsContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[
          {name: 0},
          {name: 1},
          {name: 2},
          {name: 2},
          {name: 2},
          {name: 2},
        ]}
        renderItem={(item, index) => <HourlyCard key={index}/>}
      />
    </View>
  );
};

export default HourlyConditionsContainer;
