import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DeviceDetailsScreen from './DevicesDetailsScreen';
import DevicesScreen from './DevicesScreen';
import HomeScreen from './HomeScreen';
import type { Device } from './deviceData';

export type RootStackParamList = {
  Home: undefined;
  Devices: undefined;
  DeviceDetails: { device: Device };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// This file controls the screen flow of the app.
// It tells React Navigation: "Home screen -> Devices screen -> Device details screen."
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Devices" component={DevicesScreen} />
        <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
