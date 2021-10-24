import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import FLIGHT from '../data/flight';

export default function Detail({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      {/* toolbar */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => goToHome()}>
        <View style={toolbarStyles.container}>
          <Icon name="arrow-left" type="feather" />
          <Text style={toolbarStyles.title}>Boarding Pass</Text>
        </View>
      </TouchableHighlight>
      {/* content */}
      <ScrollView style={styles.scrollView}>
        {/* journey info */}
        <View style={journeyStyles.container}>
          <View>
            <Text style={journeyStyles.title}>From</Text>
            <Text style={journeyStyles.airportName}>CGK</Text>
            <Text style={journeyStyles.airportDescription}>Jakarta, ID</Text>
          </View>
          <View style={journeyStyles.divider}>
            <Icon color="#0b803d" name="airplane" type="ionicon" />
          </View>
          <View>
            <Text style={journeyStyles.title}>To</Text>
            <Text style={journeyStyles.airportName}>SHA</Text>
            <Text style={journeyStyles.airportDescription}>Shanghai, CN</Text>
          </View>
        </View>
        {/* flight logo */}
        <View style={logoStyles.container}>
          <Image
            style={{
              width: 100,
              height: 30,
              resizeMode: 'cover',
            }}
            source={{uri: FLIGHT.flight.logo}}
            width={100}
            height={30}
            resizeMode={'cover'}
          />
        </View>
        {/* departure info */}
        <View style={departureStyles.container}>
          <View>
            <Text style={departureStyles.title}>Boarding Time</Text>
            <Text style={departureStyles.value}>{FLIGHT.boarding}</Text>
          </View>
          <View>
            <Text style={departureStyles.title}>Date</Text>
            <Text style={departureStyles.value}>{FLIGHT.date}</Text>
          </View>
          <View>
            <Text style={departureStyles.title}>Departing</Text>
            <Text style={departureStyles.value}>{FLIGHT.departure}</Text>
          </View>
        </View>
        {/* passenger info */}
        <View style={passengerStyles.container}>
          <View>
            <Text style={departureStyles.title}>Passenger</Text>
            <Text style={departureStyles.value}>{FLIGHT.passenger.name}</Text>
          </View>
          <View style={passengerStyles.rowContainer}>
            <View>
              <Text style={departureStyles.title}>Flight</Text>
              <Text style={departureStyles.value}>{FLIGHT.flight.code}</Text>
            </View>
            <View>
              <Text style={departureStyles.title}>Gate</Text>
              <Text style={departureStyles.value}>{FLIGHT.flight.gate}</Text>
            </View>
            <View>
              <Text style={departureStyles.title}>Terminal</Text>
              <Text style={departureStyles.value}>
                {FLIGHT.flight.terminal}
              </Text>
            </View>
            <View>
              <Text style={departureStyles.title}>Seat</Text>
              <Text style={departureStyles.value}>{FLIGHT.passenger.seat}</Text>
            </View>
          </View>
        </View>
        {/* barcode */}
        <View style={barcodeStyles.container}>
          <Barcode
            format="CODE128"
            value="Myber 123"
            text="scan this barcode when boarding"
            textStyle={{
              fontSize: 12,
              color: '#333',
              fontStyle: 'italic',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

const toolbarStyles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginStart: 20,
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const journeyStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#0b803d',
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
  },
  title: {
    fontSize: 12,
  },
  airportName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  airportDescription: {
    fontSize: 14,
  },
  divider: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
  },
});

const logoStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
  },
});

const departureStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#eee',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333',
    fontSize: 12,
  },
  value: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const passengerStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const barcodeStyles = StyleSheet.create({
  container: {
    marginTop: 3,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 10,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
