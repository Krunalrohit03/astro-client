import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AstrologerCard from '../components/AstrologerCard';

const liveAstrologers = [
  {
    id: '1',
    name: 'Neelaya',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    specialization: 'Tarot, Vedic',
    languages: 'English, Hindi',
    experience: 5,
    rating: 4.8,
    oldPrice: 20,
    newPrice: 10,
    isBusy: true
  },
  {
    id: '2',
    name: 'Mukesh',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    specialization: 'Numerology',
    languages: 'Hindi',
    experience: 7,
    rating: 4.6,
    oldPrice: 25,
    newPrice: 12,
    isBusy: false
  },
  {
    id: '3',
    name: 'Tarot Aahana',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    specialization: 'Tarot Reading',
    languages: 'English',
    experience: 3,
    rating: 4.5,
    oldPrice: 18,
    newPrice: 9,
    isBusy: false
  },
];

export default function LiveAstrologersList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Astrologers</Text>
      <FlatList
        data={liveAstrologers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AstrologerCard
            astrologer={item}
            onPress={() => navigation.navigate('AstrologerProfile', { astrologer: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 16 },
  title: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
