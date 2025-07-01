import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <View style={styles.row}>
      {[...Array(fullStars)].map((_, i) => (
        <Ionicons key={i} name="star" size={16} color="#f5c518" />
      ))}
      {halfStar && <Ionicons name="star-half" size={16} color="#f5c518" />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <Ionicons key={i} name="star-outline" size={16} color="#ccc" />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});
