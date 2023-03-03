import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';

import {  View } from '../components/Themed';

export default function MapScreen() {

  const [latitude,setLatitude] = useState(-22.913947865776727)
  const [longitude,setLongitude] = useState(-47.068129919628475)

  return (
    <View style={styles.container}>
     <MapView style={styles.map}
      initialRegion={{
        latitude: -22.913947865776727,
        longitude: -47.068129919628475,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    }}
  >
    <Marker coordinate={{ latitude : latitude , longitude : longitude }}>
      <Callout>
        <Text>SENAI</Text>
      </Callout>
    </Marker>

  </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
