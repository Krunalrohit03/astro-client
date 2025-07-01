import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import HeaderGreeting from '../components/HeaderGreeting';
import PromoBanner from '../components/PromoBanner';
import FilterChipsRow from '../components/FilterChipsRow';
import AstrologerCard from '../components/AstrologerCard';

export default function ChatAstrologerScreen({ navigation }) {
  const [astrologers, setAstrologers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAstrologers() {
      try {
        const response = await fetch('http://192.168.31.147:5000/astrologers');
        const data = await response.json();
        setAstrologers(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAstrologers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#6a0dad" />
      </View>
    );
  }

  return (
    <FlatList
      data={astrologers}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={() => (
        <View>
          <HeaderGreeting />
          <PromoBanner />
          <FilterChipsRow />
        </View>
      )}
      renderItem={({ item }) => (
        <AstrologerCard
          astrologer={item}
          onPress={() =>
            navigation.navigate('AstrologerProfile', { astrologer: item })
          }
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
