import { View, Image } from 'react-native';
import React from 'react';
import styles from '../styles/HomeScreen.Styles';
import { useTheme } from 'react-native-paper';
import NavOptions from '../components/NavOptions';
import GoogleAutoComplete from '../components/GoogleAutoComplete';
import { useAppDispatch } from '../hooks/hooks';
import { setDestination, setOrigin } from '../redux/slices/navSlice';

const uberLogoURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png';

const HomeScreen = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.uberLogo}
          source={{
            uri: uberLogoURL,
          }}
        />
      </View>
      <GoogleAutoComplete
        placeholder="Where From"
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details?.geometry.location,
              description: data.description,
            }),
          );
          dispatch(setDestination(null));
        }}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
