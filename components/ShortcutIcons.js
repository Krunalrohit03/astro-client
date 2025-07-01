import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const shortcuts = [
  { label: 'Daily Horoscope', icon: 'sunny' },
  { label: 'Free Kundli', icon: 'book' },
  { label: 'Kundli Matching', icon: 'people' },
  { label: 'Astrology Blog', icon: 'document-text' },
];

export default function ShortcutIcons() {
  return (
    <View style={styles.container}>
      {shortcuts.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Ionicons name={item.icon} size={28} color="#f5c518" />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  item: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
