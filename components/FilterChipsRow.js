import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const filters = ['All', '50% Off', 'Love', 'Career', 'Health'];

export default function FilterChipsRow() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {filters.map((filter, index) => (
        <TouchableOpacity key={index} style={styles.chip}>
          <Text style={styles.chipText}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  chip: {
    backgroundColor: '#fff',
    borderColor: '#f5c518',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  chipText: {
    fontSize: 14,
    color: '#333',
  },
});
