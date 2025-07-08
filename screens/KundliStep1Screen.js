import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function KundliStep1Screen({ navigation }) {
  const [name, setName] = useState('');

  const handleNext = () => {
    if (!name.trim()) return;
    // Navigate to next step or save name to context/state
    navigation.navigate('KundliStep2', { name });
    console.log('Name:', name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fefbe9' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kundli</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Step Indicator */}
      <View style={styles.stepRow}>
        {[0, 1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepCircle,
              index === 0 && { backgroundColor: '#FFD700' }
            ]}
          >
            {index === 0 && <Ionicons name="person" size={16} color="#000" />}
          </View>
        ))}
      </View>

      {/* Form Content */}
      <View style={styles.formContainer}>
        <Text style={styles.greeting}>Hey there!</Text>
        <Text style={styles.question}>What is your name?</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          style={styles.input}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#fefbe9',
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fefbe9',
    padding: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 24,
    fontSize: 16
  },
  nextButton: {
    backgroundColor: '#FFD700',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  }
});
