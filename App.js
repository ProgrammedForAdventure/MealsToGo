import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = useState();
  const onChangeText = (text) => {
    console.log(text);
    setSearchQuery(text);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Searchbar
          style={styles.searchBar}
          onChangeText={onChangeText}
          placeholder="Search"
          value={searchQuery}
        />
        <Text style={styles.content}>Our React Native blank canvas</Text>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, // Returns 'null' on iOS, # on Android
  },
  searchBar: {
    backgroundColor: 'green',
    padding: 12,
  },
  content: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 12,
  },
});
