import React from 'react';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useTheme } from 'react-native-paper';
// import { useAppDispatch } from '../hooks/hooks';
// import { setDestination, setOrigin } from '../redux/slices/navSlice';

type Props = {
  placeholder: string;
  onPress: (data: GooglePlaceData, details: GooglePlaceDetail | null) => void;
};

const GoogleAutoComplete = ({ placeholder, onPress }: Props) => {
  const { colors } = useTheme();

  // const dispatch = useAppDispatch();

  return (
    <GooglePlacesAutocomplete
      // onPress={(data, details = null) => {
      //   dispatch(
      //     setOrigin({
      //       location: details?.geometry.location,
      //       description: data.description,
      //     }),
      //   );
      //   dispatch(setDestination(null));
      // }}
      onPress={onPress}
      placeholder={placeholder}
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
