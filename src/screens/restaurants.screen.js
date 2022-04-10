import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const onChangeText = (text) => {
    console.log(text);
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        onChangeText={onChangeText}
        placeholder="Search"
        value={searchQuery}
      />

      <View style={styles.content}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, // Returns 'null' on iOS, # on Android
  },
  searchBar: {
    padding: 12,
  },
  content: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 12,
  },
});
