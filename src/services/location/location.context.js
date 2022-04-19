import React, { useState, useEffect, createContext } from 'react';
import { locationRequest, locationTransform } from './location.service';
import { Platform, Alert, ToastAndroid } from 'react-native';

export const LocationContext = createContext();

const notifyMessage = (message) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(message);
  }
};

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('San Francisco');
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    console.log(`Performing search: ${keyword}`);

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        const message = `Location request error: ${keyword} ${err}`;
        console.debug(message);
        notifyMessage(message);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
