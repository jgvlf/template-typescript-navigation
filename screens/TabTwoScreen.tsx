import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import MapView, {Callout, Marker} from 'react-native-maps';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [latitude, setLatitude] = useState(-22.91561508925671)
  const [longitude, setLongitude] = useState(-22.91561508925671)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -22.91561508925671, 
          longitude: -47.0532370019452,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
      >
        <Marker coordinate={{latitude:latitude, longitude:longitude}}>
          <Callout>
            <Text>CASA</Text>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
