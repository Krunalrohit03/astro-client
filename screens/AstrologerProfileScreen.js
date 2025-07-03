import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AstrologerProfileScreen({ route, navigation }) {
  const { astrologer } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: astrologer.photo }} style={styles.photo} />

        <Text style={styles.name}>{astrologer.name}</Text>
        <Text style={styles.specialization}>{astrologer.specialization}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Languages:</Text>
          <Text style={styles.value}>{astrologer.languages}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Experience:</Text>
          <Text style={styles.value}>{astrologer.experience} Years</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.value}>{astrologer.rating} ⭐</Text>
        </View>

        <Text style={styles.description}>
          {astrologer.description ||
            `This astrologer is an expert in ${astrologer.specialization}. They have helped many clients with insightful readings.`}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate('ChatScreen', { astrologer })}
          >
            <Text style={styles.buttonText}>💬 Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.callButton}
            onPress={() => navigation.navigate('CallWithAstrologerScreen', { astrologer })}
          >
            <Text style={styles.buttonText}>📞 Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  specialization: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  label: {
    fontWeight: '600',
    color: '#555',
  },
  value: {
    color: '#333',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginVertical: 16,
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  chatButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  callButton: {
    backgroundColor: '#FFB300',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16,
  },
});
