import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Weather = () => {
  return (
    <View style={styles.container}>
      <Text>Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Weather;
