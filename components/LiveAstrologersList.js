import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const liveAstrologers = [
  { id: '1', name: 'Neelaya', photo: 'https://randomuser.me/api/portraits/women/45.jpg' },
  { id: '2', name: 'Mukesh2', photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: '3', name: 'Tarot Aahana', photo: 'https://randomuser.me/api/portraits/women/46.jpg' },
];

export default function LiveAstrologersList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Astrologers</Text>
      <FlatList
        data={liveAstrologers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  title: { marginLeft: 16, fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  item: { alignItems: 'center', marginHorizontal: 8 },
  photo: { width: 80, height: 80, borderRadius: 40, marginBottom: 4 },
  name: { fontSize: 14 },
});
