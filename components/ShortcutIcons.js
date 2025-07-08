import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const shortcuts = [
  { label: 'Daily Horoscope', icon: 'sunny', screen: 'DailyHoroscope' },
  { label: 'Free Kundli', icon: 'book', screen: 'FreeKundli' },
  { label: 'Kundli Matching', icon: 'people', screen: 'KundliMatching' },
  { label: 'Astrology Blog', icon: 'document-text', screen: 'AstrologyBlog' },
];

export default function ShortcutIcons({ navigation }) {
  return (
    <View style={styles.container}>
      {shortcuts.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => {
            if (item.screen) {
              navigation.navigate(item.screen);
            }
          }}
        >
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
