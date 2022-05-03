import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-paper';
import styled from 'styled-components';
import { View } from 'react-native';

import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

// const MyTabs () => {} // Private function
// function MyTabs() { // Main function

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  const LogoutButton = styled(Button).attrs({
    color: colors.brand.primary,
    mode: 'contained',
  })`
    width: auto;
    margin-top: 24px;
    padding-left: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[2]};
  `;

  return (
    <SafeArea>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <LogoutButton title={'Logout'} onPress={onLogout}>
          Logout
        </LogoutButton>
      </View>
    </SafeArea>
  );
};

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

const styles = {
  logoutButton: {
    marginTop: 24,
    marginHorizontal: 24,
  },
};
