import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

// const MyTabs () => {} // Private function
// function MyTabs() { // Main function

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TAB_ICON = {
  Home: 'restaurant',
  Map: 'map',
  Settings: 'ios-list-sharp',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={RestaurantsNavigator} />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
