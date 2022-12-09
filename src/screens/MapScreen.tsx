import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';

import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

export type MapStackParamList = {
  NavigateCard: undefined;
  RideOptions: undefined;
};

const MapScreen = () => {
  const { colors } = useTheme();

  const Stack = createNativeStackNavigator<MapStackParamList>();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.topContainer}>
        <Map />
      </View>
      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.background },
        ]}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
  },
});

export default MapScreen;
