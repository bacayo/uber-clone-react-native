import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import GoogleAutoComplete from './GoogleAutoComplete';
import { useAppDispatch } from '../hooks/hooks';
import { setDestination } from '../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MapStackParamList } from '../screens/MapScreen';

const NavigateCard = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MapStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: colors.text }]}>
        Hello, Username
      </Text>
      <GoogleAutoComplete
        placeholder="Where To"
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details?.geometry.location,
              description: data.description,
            }),
          );
          navigation.navigate('RideOptions');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
  },
  header: {
    textAlign: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default NavigateCard;
