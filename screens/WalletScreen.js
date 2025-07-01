import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const transactions = [
  { id: '1', type: 'Recharge', amount: 200, date: '2025-06-30' },
  { id: '2', type: 'Chat', amount: -50, date: '2025-06-29' },
  { id: '3', type: 'Call', amount: -100, date: '2025-06-28' },
];

export default function WalletScreen({ navigation }) {
  const balance = 200;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Balance</Text>
      <Text style={styles.balance}>₹ {balance}</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('RechargeScreen')}
      >
        <Text style={styles.addButtonText}>Add Money</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Recent Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionRow}>
            <Text>{item.type}</Text>
            <Text>{item.amount > 0 ? `+₹${item.amount}` : `-₹${Math.abs(item.amount)}`}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  balance: { fontSize: 28, color: '#6a0dad', marginBottom: 16 },
  addButton: { backgroundColor: '#6a0dad', padding: 12, borderRadius: 8, alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginTop: 24, marginBottom: 8 },
  transactionRow: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: { color: '#888', fontSize: 12 },
});
