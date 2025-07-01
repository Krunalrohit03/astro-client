import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomerSupportChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Support Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});
