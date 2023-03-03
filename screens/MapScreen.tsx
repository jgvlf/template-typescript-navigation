import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';

import {  View } from '../components/Themed';

export default function MapScreen() {

  const [latitude,setLatitude] = useState(-22.913947865776727)
  const [longitude,setLongitude] = useState(-47.068129919628475)

  const locais = [
    {
      nome: "Escola e Faculdade de Tecnologia SENAI Roberto Mange",
      latitude: -22.913947865776727,
      longitude: -47.068129919628475,
    },
    {
      nome: " CaP Robert BOSCH GmbH",
      latitude: -22.896841081767903,
      longitude: -47.11158354612385,
    },
    {
      nome: "CASA",
      latitude: -22.915585442926915,
      longitude: -47.0532584596165,
    },
    {
      nome: "Colégio Franciscano Ave Maria",
      latitude: -22.912134108508837,
      longitude: -47.05499400379461,
    },
    {
      nome: "Discamp",
      latitude: -22.91716546061756,
      longitude: -47.05717002624316,
    },
  ]
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
    {locais.map(({nome, latitude, longitude}) => (
      <Marker key={nome} coordinate={{latitude: latitude, longitude: longitude}}>
        <Callout>
          <Text>
            {nome}
          </Text>
        </Callout>
      </Marker>
    ))}
    {/* <Marker coordinate={{ latitude : latitude , longitude : longitude }}>
      <Callout>
        <Text>SENAI</Text>
      </Callout>
    </Marker> */}

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
