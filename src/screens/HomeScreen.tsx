import { View, Image } from 'react-native';
import React from 'react';
import styles from '../styles/HomeScreen.Styles';
import { useTheme } from 'react-native-paper';
import NavOptions from '../components/NavOptions';

const uberLogoURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png';

const HomeScreen = () => {
  const { colors } = useTheme();
  console.log(colors.background);

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
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
