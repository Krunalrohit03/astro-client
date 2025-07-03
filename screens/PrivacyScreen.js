import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function PrivacyScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔐 Privacy Policy</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          This is the sample privacy policy for AstroTalkApp.
          {'\n\n'}
          - We respect your privacy.
          {'\n'}
          - Data is collected only to provide our services.
          {'\n'}
          - No personal data will be sold or shared without consent.
          {'\n\n'}
          For any questions, contact support.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8DC', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  text: { fontSize: 15, color: '#333', lineHeight: 22 },
});
