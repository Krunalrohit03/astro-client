import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What will my future be in the next 5 years?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Chat Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff9e6',
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#f5c518',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
