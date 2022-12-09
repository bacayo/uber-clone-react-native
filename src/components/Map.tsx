import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {
  const { origin, destination } = useSelector(
    (state: RootState) => state.navSlice,
  );

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }

    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
      animated: true,
    });
  }, [origin, destination]);

  //TODO: Add live location
  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination?.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="red"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
