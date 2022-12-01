import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './types';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="EatsScreen" component={EatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
