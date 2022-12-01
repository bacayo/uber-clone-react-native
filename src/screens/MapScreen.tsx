import { Text, View } from 'react-native';
import React from 'react';

import Map from '../components/Map';

const MapScreen = () => {
  console.log('Hello');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Map />
      </View>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default MapScreen;
