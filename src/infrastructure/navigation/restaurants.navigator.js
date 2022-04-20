import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = (props) => {
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
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
