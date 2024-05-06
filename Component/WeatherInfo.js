import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import WeatherSearch from './Search';

const WeatherInfo = ({ weatherData, fetchData }) => {
  const {
    name,
    weather: [{ description, icon, main }],
    sys: { sunrise, sunset },
    wind: { speed },
    visibility,
    main: { feels_like, humidity, pressure, temp },
  } = weatherData;

  const iconImg = 'http://openweathermap.org/img/w/' + icon + '.png';

  return (
    <SafeAreaView style={styles.container}>
      {/* This is the search bar  */}
      <WeatherSearch fetchData={fetchData} />
      {/* Display the city name followed by the temperature*/}
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image style={styles.largeIcon} source={{ uri: iconImg }} />
        <Text style={styles.currentTemp}>{Math.floor(temp / 10)} °C</Text>
      </View>

      <Text style={styles.description}>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </Text>
      <View style={styles.extraInfo}>
        {/* ******* Feels Like ******** */}
        <View style={styles.info}>
          <Text style={styles.infoTextHeading}>Feels Like</Text>
          <FontAwesome
            name='temperature-high'
            size={30}
            color='red'
            style={styles.smallIcon}
          />
          <Text style={styles.infoText}>{Math.floor(feels_like / 10)} °C</Text>
        </View>
        {/* ******* Humidity ******** */}
        <View style={styles.info}>
          <Text style={styles.infoTextHeading}>Humidity</Text>
          <IconFeather
            name='droplet'
            size={30}
            color='#00ffff'
            style={styles.smallIcon}
          />
          <Text style={styles.infoText}>{humidity}</Text>
        </View>
      </View>
      {/* ------------------  */}
      <View style={styles.extraInfo}>
        {/* ******* Visiblity ******** */}
        <View style={styles.info}>
          <Text style={styles.infoTextHeading}>Visibility</Text>
          <FontAwesome
            name='low-vision'
            size={30}
            color='white'
            style={styles.smallIcon}
          />
          <Text style={styles.infoText}>{visibility / 1000}</Text>
        </View>
        {/* ******* Wind Speed ******** */}
        <View style={styles.info}>
          <Text style={styles.infoTextHeading}>Wind Speed</Text>
          <FontAwesome
            name='wind'
            size={30}
            color='white'
            style={styles.smallIcon}
          />
          <Text style={styles.infoText}>{speed} m/s</Text>
        </View>
      </View>
      {/* ------------------  */}
      <View style={styles.extraInfo}>
        {/* ******* Sunrise ******** */}
        <View style={styles.info}>
          <Text style={styles.infoTextHeading}>Sunrise</Text>
          <IconFeather
            name='sunrise'
            size={30}
            color='gold'
            style={styles.smallIcon}
          />
          <Text style={styles.infoText}>
            {new Date(sunrise * 1000).toLocaleString()}
          </Text>
        </View>
        {/* ******* Sunset ******** */}
        <View style={styles.info}>
          <Text style={styles.infoTextHeading}>Sunset</Text>
          <IconFeather
            reverse
            name='sunset'
            size={30}
            color='orange'
            style={styles.smallIcon}
          />
          <Text style={styles.infoText}>
            {new Date(sunset * 1000).toLocaleString()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  logo: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
  largeIcon: {
    width: 80,
    height: 70,
  },
  currentTemp: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontSize: 20,

    marginTop: 2,
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 25,
    padding: 10,
  },
  info: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: '#0047ab',
    elevation: 9,

    padding: 12,
    borderRadius: 10,
    borderBottomColor: '#f2f2f2',
    justifyContent: 'center',
  },
  smallIcon: {
    marginLeft: 53,
    marginTop: 6,
    marginBottom: 10,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#fff',
  },
  infoTextHeading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
