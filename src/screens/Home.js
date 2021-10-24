import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Icon} from 'react-native-elements';
import FLIGHTS from '../data/flights';

export default function Home({navigation}) {
  function goToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <View style={headerStyles.container}>
        <Image
          style={headerStyles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Icon name="user" type="feather" />
      </View>
      {/* incoming trips */}
      <View style={incomingStyles.container}>
        {/* top */}
        <View style={incomingStyles.topContainer}>
          <View style={incomingStyles.topItem}>
            <View style={incomingStyles.topItemIcon}>
              <Icon
                size={25}
                color="rgba(255,255,255,0.4)"
                name="flight-takeoff"
                type="material"
              />
            </View>
            <Text style={incomingStyles.title}>SHA</Text>
            <Text style={incomingStyles.description}>Shanghai, CN</Text>
          </View>
          <View style={incomingStyles.topDivider}>
            <Icon color="#0b803d" name="airplane" type="ionicon" />
          </View>
          <View style={incomingStyles.topItem}>
            <View style={incomingStyles.topItemIcon}>
              <Icon
                size={25}
                color="rgba(255,255,255,0.4)"
                name="flight-land"
                type="material"
              />
            </View>
            <Text style={incomingStyles.title}>NYC</Text>
            <Text style={incomingStyles.description}>New York, USA</Text>
          </View>
        </View>
        {/* bottom */}
        <View style={incomingStyles.navigationContainer}>
          <View style={incomingStyles.navigation}>
            <Icon color="#0b803d" name="arrow-left" type="feather" />
          </View>
          <View style={incomingStyles.current}>
            <Text style={incomingStyles.currentTitle}>Monday</Text>
            <Text style={incomingStyles.currentDescription}>Oct 24 '21</Text>
          </View>
          <View style={incomingStyles.navigation}>
            <Icon color="#0b803d" name="arrow-right" type="feather" />
          </View>
        </View>
      </View>
      {/* histories */}
      <View style={historyStyles.container}>
        <Text style={historyStyles.title}>Recent Flights</Text>
        {FLIGHTS.map((flight, index) => (
          <View style={historyStyles.item} key={index}>
            {/* content */}
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => goToDetail()}>
              <View style={historyStyles.contentContainer}>
                <View>
                  <Text style={historyStyles.contentTime}>
                    {flight.departure}
                  </Text>
                  <Text style={historyStyles.contentAirport}>
                    {flight.from}
                  </Text>
                </View>
                <View style={historyStyles.durationContainer}>
                  <Text style={historyStyles.duration}>{flight.duration}</Text>
                  <View style={historyStyles.durationDivider}></View>
                  {flight.transit <= 0 && (
                    <Text style={historyStyles.transit}>Direct Flight</Text>
                  )}
                  {flight.transit >= 1 && (
                    <Text style={historyStyles.transit}>
                      {flight.transit}x Transit
                    </Text>
                  )}
                </View>
                <View>
                  <Text style={[historyStyles.contentTime, styles.textRight]}>
                    {flight.arrival}
                  </Text>
                  <Text
                    style={[historyStyles.contentAirport, styles.textRight]}>
                    {flight.to}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
            {/* footer */}
            <View style={historyStyles.footerContainer}>
              <Image
                style={historyStyles.airlineLogo}
                width={100}
                height={30}
                resizeMode={'cover'}
                source={{
                  uri: flight.airline,
                }}
              />
              <Text style={historyStyles.price}>${flight.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textRight: {
    textAlign: 'right',
  },
});

const headerStyles = StyleSheet.create({
  container: {
    marginVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 33,
    resizeMode: 'cover',
  },
});

const incomingStyles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0b803d',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    elevation: 10,
  },
  topItem: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 25,
    position: 'relative',
  },
  topItemIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  description: {
    color: '#fafbfc',
    fontSize: 12,
  },
  topDivider: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
  },
  //   bottom
  navigationContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigation: {
    backgroundColor: '#fff',
    elevation: 10,
    padding: 15,
    borderRadius: 5,
  },
  current: {
    flex: 1,
    backgroundColor: '#0b803d',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentTitle: {
    fontSize: 16,
    color: '#fff',
  },
  currentDescription: {
    fontSize: 12,
    color: '#fafbfc',
  },
});

const historyStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: '#333',
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
  },
  contentTime: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#333',
  },
  contentAirport: {
    color: '#333',
  },
  durationContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  duration: {
    textAlign: 'center',
    color: '#333',
  },
  durationDivider: {
    height: 0.5,
    backgroundColor: '#666',
    marginVertical: 3,
  },
  transit: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  footerContainer: {
    backgroundColor: '#eee',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
  },
  airlineLogo: {
    resizeMode: 'cover',
  },
  price: {
    color: '#0b803d',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
