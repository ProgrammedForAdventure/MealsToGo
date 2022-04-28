import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { initializeApp } from 'firebase/app';

import { theme } from './src/infrastructure/theme/index';
import { Navigation } from './src/infrastructure/navigation/index';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBc2otVhLD68-Ku1H4p07UGT1pAb0wto4M',
  authDomain: 'meals-to-go-9e65b.firebaseapp.com',
  projectId: 'meals-to-go-9e65b',
  storageBucket: 'meals-to-go-9e65b.appspot.com',
  messagingSenderId: '353855785535',
  appId: '1:353855785535:web:4298e0d1917ca4e351c68a',
};

initializeApp(firebaseConfig);

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
