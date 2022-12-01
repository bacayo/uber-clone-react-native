import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useTheme } from 'react-native-paper';
import { useAppDispatch } from '../hooks/hooks';
import { setDestination, setOrigin } from '../redux/slices/navSlice';

const GoogleAutoComplete = () => {
  const { colors } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <GooglePlacesAutocomplete
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details?.geometry.location,
            description: data.description,
          }),
        );
        dispatch(setDestination(null));
      }}
      placeholder="Where From?"
      // nearbyPlacesAPI="GooglePlacesSearch"
      fetchDetails={true}
      minLength={2}
      query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
      debounce={300}
      enablePoweredByContainer={false}
      styles={{
        container: {
          flex: 0,
          margin: 8,
          borderRadius: 5,
        },
        textInput: {
          height: 38,
          color: colors.text,
          fontSize: 16,
        },
        description: {
          color: colors.text,
        },
      }}
    />
  );
};

export default GoogleAutoComplete;
