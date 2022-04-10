import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.searchBar}>Search</Text>
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
