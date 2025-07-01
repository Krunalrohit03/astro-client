import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RechargeScreen({ navigation }) {
  const [amount, setAmount] = useState(100);

  const rechargeOptions = [100, 200, 500];

  const handleRecharge = () => {
    Alert.alert('Success', `₹${amount} added to your wallet.`);
    navigation.goBack(); // Later: update backend/balance
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Recharge Amount</Text>
      {rechargeOptions.map((amt) => (
        <TouchableOpacity
          key={amt}
          style={[
            styles.option,
            amount === amt && styles.selectedOption,
          ]}
          onPress={() => setAmount(amt)}
        >
          <Text style={amount === amt ? styles.selectedText : styles.text}>
            ₹ {amt}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.payButton} onPress={handleRecharge}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  option: {
    borderWidth: 1,
    borderColor: '#6a0dad',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#6a0dad',
  },
  text: { fontSize: 16, color: '#6a0dad' },
  selectedText: { fontSize: 16, color: '#fff' },
  payButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
