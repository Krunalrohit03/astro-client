import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function KundliStep5Screen({ navigation, route }) {
  const [birthPlace, setBirthPlace] = useState('');
  const [recentlySearched, setRecentlySearched] = useState(['Vapi']);

  // Check if coming back from search with selected place
  useEffect(() => {
    if (route.params?.selectedPlace) {
      setBirthPlace(route.params.selectedPlace);
      if (!recentlySearched.includes(route.params.selectedPlace)) {
        setRecentlySearched([route.params.selectedPlace, ...recentlySearched]);
      }
    }
  }, [route.params?.selectedPlace]);

  const handleSubmit = () => {
    if (!birthPlace.trim()) {
      alert('Please enter your birth place');
      return;
    }
    console.log('Birth Place:', birthPlace);
    navigation.navigate('KundliReport', { birthPlace });
  };

  const openSearchScreen = () => {
    navigation.navigate('PlaceSearchScreen', { recent: recentlySearched });
  };

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

      {/* Step Indicator */}
      <View style={styles.stepRow}>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepCircle,
              index <= 4 && { backgroundColor: '#FFD700' },
              index === 4 && styles.activeStep,
            ]}
          >
            {index === 4 && (
              <Ionicons name="location-sharp" size={16} color="#000" />
            )}
          </View>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24 }}>
        <Text style={styles.title}>Where were you born?</Text>

        <TouchableOpacity style={styles.searchBox} onPress={openSearchScreen}>
          <Text style={[styles.inputText, !birthPlace && { color: '#999' }]}>
            {birthPlace || 'Enter City, State, Country'}
          </Text>
          <Ionicons name="search" size={20} color="#888" />
        </TouchableOpacity>

        {recentlySearched.length > 0 && (
          <>
            <Text style={styles.recentLabel}>Recently Searched</Text>
            <View style={styles.recentTagContainer}>
              {recentlySearched.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.recentTag}
                  onPress={() => setBirthPlace(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
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
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  stepCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStep: {
    borderColor: '#000',
    borderWidth: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 48,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
  },
  recentLabel: {
    marginTop: 20,
    fontSize: 14,
    color: '#444',
  },
  recentTagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  recentTag: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 40,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
