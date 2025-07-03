import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function TermsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📜 Terms and Conditions</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          These are the sample terms and conditions for AstroTalkApp.
          {'\n\n'}
          - Use of this app is subject to local laws.
          {'\n'}
          - No misuse or illegal activity allowed.
          {'\n'}
          - Services offered are for entertainment and guidance only.
          {'\n\n'}
          By using the app, you agree to these terms.
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
