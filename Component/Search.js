import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

export default function WeatherSearch({ fetchData }) {
  const [cityName, setCityName] = useState('');

  const changeHandler = (usrInput) => {
    console.log(usrInput);
    setCityName(usrInput);
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder='Search city'
        style={styles.input}
        onChangeText={changeHandler}
      />
      <FontAwesome
        name='search'
        size={18}
        color='navy'
        style={styles.searchIcon}
        onPress={() => {
          //console.log('city name in search', cityName);
          fetchData(cityName);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginBottom: 5,
    padding: 4,
    fontSize: 18,
    borderRadius: 9,
    borderBottomColor: 'black',
  },
  searchIcon: {
    padding: 6,
    // backgroundColor: '#0047ab',
    // borderRadius: 8,
    // borderBottomColor: 'black',
  },
});
