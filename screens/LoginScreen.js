import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function LoginScreen({ navigation }) {
  const [input, setInput] = useState('');
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    if (input.trim() === '') return;
    login({ name: input });
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Home' }],
    // });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Enter your name or mobile"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#6a0dad',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: { backgroundColor: '#6a0dad', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
