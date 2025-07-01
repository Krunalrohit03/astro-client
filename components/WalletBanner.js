import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WalletBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.walletText}>₹ 20</Text>
      <Text style={styles.cashback}>50% Cashback</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  walletText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cashback: {
    color: 'green',
    fontSize: 14,
  },
});
