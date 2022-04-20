import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Text } from 'react-native';

import { RestaurantsScreen } from '../../screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name={'Restaurants'}
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name={'RestaurantDetail'}
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
