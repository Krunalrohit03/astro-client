import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlaceSearchScreen({ navigation, route }) {
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState(route.params?.recent || ['Vapi']);
  const [results, setResults] = useState([]);

  // Dummy data for search
  const locations = [
    'Vapi, Gujarat, India',
    'Vapi-Nua, Salavan, Laos',
    'Vapileh, Markazi, Iran',
    'Vapila, North Macedonia',
  ];

  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim() === '') {
      setResults([]);
    } else {
      setResults(
        locations.filter((item) =>
          item.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const handleSelect = (place) => {
    if (!recent.includes(place)) {
      setRecent([place, ...recent]);
    }
    navigation.navigate('KundliStep5', { selectedPlace: place });
  };

  const renderRecent = () => (
    <>
      {recent.length > 0 && (
        <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
          <Text style={styles.recentLabel}>Recently Searched</Text>
          <View style={styles.recentContainer}>
            {recent.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.recentChip}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.recentText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Place of Birth</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Input */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          value={query}
          onChangeText={handleSearch}
          placeholder="Search city, state, country"
          style={styles.searchInput}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch('')}>
            <Ionicons name="close" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem} onPress={() => handleSelect(item)}>
            <Ionicons name="location-sharp" size={20} color="#000" style={{ marginRight: 12 }} />
            <View>
              <Text style={styles.resultTitle}>{item.split(',')[0]}</Text>
              <Text style={styles.resultSub}>{item.split(',').slice(1).join(',').trim()}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={renderRecent()}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFBEA' },
  header: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  recentLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  recentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  recentChip: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  recentText: {
    fontSize: 14,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  resultSub: {
    fontSize: 12,
    color: '#666',
  },
});
