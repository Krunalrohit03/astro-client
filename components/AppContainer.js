import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';

export default function AppContainer({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    paddingBottom: Platform.OS === 'android' ? 40 : 0,
  },
});
