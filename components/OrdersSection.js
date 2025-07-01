import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OrdersSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>💬 Chat with Astrologer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>📞 Call with Astrologer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    flex: 1,
    backgroundColor: '#f5c518',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold' },
});
