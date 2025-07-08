import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FreeKundliScreen({ navigation }) {
  // Simulate kundli data
  const [searchQuery, setSearchQuery] = useState('');

  // Replace this with actual data fetch
  const [kundlis, setKundlis] = useState([
    {
      id: '1',
      name: 'Krunal',
      dob: '03 February 1993, 12:00 PM',
      location: 'Vapi, Gujarat, India',
    },
    // you can comment this object to test empty list
  ]);

  const filteredKundlis = kundlis.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kundli</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#888" />
        <TextInput
          placeholder="Search kundli by name"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Kundli List */}
      {filteredKundlis.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Result Not Found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredKundlis}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 12 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('KundliReport', { kundliData: item })}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>{item.dob}</Text>
                <Text style={styles.details}>{item.location}</Text>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Ionicons name="create-outline" size={20} color="#888" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}

        />
      )}

      {/* Create New Button */}
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('KundliStep1')}>
        <Text style={styles.createButtonText}>Create New Kundli</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 24,
    margin: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontWeight: 'bold',
    color: '#333',
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  editButton: {
    padding: 6,
  },
  createButton: {
    backgroundColor: '#FFD700',
    margin: 16,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  createButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
