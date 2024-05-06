import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Constants } from 'expo-constants';
import WeatherInfo from './WeatherInfo';
import WeatherSearch from './Search';

const API_KEYS = '8b3062eb0f61c09382d2fddd2667c82e';

export default function Weather() {
  // This loads the weather data
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  // This checks if the data was loaded or not
  const [loaded, setLoaded] = useState(false);
  APP_KEY = '8b3062eb0f61c09382d2fddd2667c82e';

  //write a async function to fetch the weather data
  const fetchWeatherData = async (cityName) => {
    //console.log('>> Fetching the weather data for:', cityName);
    //please use this format to check it on the browser
    //http://api.openweathermap.org/data/2.5/weather?q=New York&appid=8b3062eb0f61c09382d2fddd2667c82e
    setCityName(cityName);
    try {
      setLoaded(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_KEY}`
      );
      console.log('status', response.status);
      if (response.status == 200) {
        // the above status code is to check if it is 404 or 200
        const data = await response.json();
        console.log('res data', data);
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData('Chicago');
  }, []);

  //If the data is not loaded, display loading screen through the Activity Indicator component
  if (!loaded) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Weather App</Text>
        </View>
        <View style={{ paddingTop: 110, alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Weather App</Text>
        </View>
        <View style={{ paddingTop: 110, alignItems: 'center' }}>
          <WeatherSearch fetchData={fetchWeatherData} />
          <Text style={styles.errMsgText}>
            {' '}
            Weather data for city name - {cityName} not found{' '}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchData={fetchWeatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6fa',
    alignContent: 'center',
    top: 50,
  },
  header: {
    backgroundColor: '#0047ab',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 29,
    fontWeight: 'bold',
  },
  errMsgText: {
    fontSize: 18,
    margin: 20,
  },
});
