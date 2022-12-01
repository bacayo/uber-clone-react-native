import React from 'react';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Map = () => {
  const { origin } = useSelector((state: RootState) => state.navSlice);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;
