import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

// Dummy user data
const user = {
  name: 'Fiyin',
  location: {
    latitude: 43.6532,
    longitude: -79.3832,
  },
};

// Dummy safety marker data
const safetyMarkers = [
  {
    id: 1,
    title: 'Incident Reported',
    coordinate: { latitude: 43.6535, longitude: -79.3820 },
  },
  {
    id: 2,
    title: 'Safe Spot: 24hr Coffee Shop',
    coordinate: { latitude: 43.6545, longitude: -79.3840 },
  },
];

// Dummy safe route data (polyline)
const safeRoute = [
  { latitude: 43.6532, longitude: -79.3832 },
  { latitude: 43.6540, longitude: -79.3830 },
  { latitude: 43.6545, longitude: -79.3840 },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>Welcome back, {user.name}! 👋</Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: user.location.latitude,
            longitude: user.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          {safetyMarkers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              pinColor={marker.title.includes('Incident') ? 'red' : 'green'}
            />
          ))}
          <Polyline
            coordinates={safeRoute}
            strokeColor="green"
            strokeWidth={4}
          />
        </MapView>

        <TouchableOpacity style={styles.alertButton}>
          <Ionicons name="alert-circle-outline" size={24} color="#fff" />
          <Text style={styles.alertButtonText}>Hold to Trigger Emergency</Text>
        </TouchableOpacity>

        <Text style={styles.helper}>
          Tip: Soon, you’ll be able to double press your power or volume button to send an alert instantly. Stay tuned!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 16,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
  },
  map: {
    width: Dimensions.get('window').width * 0.95,
    height: 350,
    borderRadius: 12,
    marginVertical: 10,
  },
  alertButton: {
    flexDirection: 'row',
    backgroundColor: '#D62828',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  helper: {
    marginTop: 10,
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default HomeScreen;

