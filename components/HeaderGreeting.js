import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HeaderGreeting() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
        style={styles.avatar}
      />
      <Text style={styles.greeting}>Hi Krunal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
