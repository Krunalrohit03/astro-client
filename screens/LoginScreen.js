import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleGetOtp = () => {
    if (!phone.trim()) return;
    navigation.navigate('VerifyOtp', { phone });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top illustration */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3256/3256018.png'
            }}
            style={styles.illustration}
          />

          <Text style={styles.appTitle}>Astrotalk</Text>
          <Text style={styles.subText}>First Chat with Astrologer is FREE!</Text>
        </View>

        {/* Phone input */}
        <View style={styles.phoneContainer}>
          <View style={styles.phoneRow}>
            <Text style={styles.countryCode}>🇮🇳 IN +91</Text>
            <TextInput
              placeholder="Phone number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="number-pad"
              style={styles.phoneInput}
            />
          </View>

          <TouchableOpacity style={styles.getOtpButton} onPress={handleGetOtp}>
            <Text style={styles.getOtpText}>GET OTP</Text>
          </TouchableOpacity>

          <Text style={styles.terms}>
            By signing up, you agree to our
            <Text> </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Terms')}>Terms of Use</Text>
            <Text> and </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Privacy')}>Privacy Policy</Text>
            <Text>.</Text>
          </Text>
        </View>

        {/* Footer Stats */}
        <View style={styles.footer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Privacy</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10000+</Text>
            <Text style={styles.statLabel}>Top astrologers of India</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3Cr+</Text>
            <Text style={styles.statLabel}>Happy customers</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFD700' },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  illustration: {
    width: 180,
    height: 180,
    marginBottom: 12,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000'
  },
  subText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  phoneContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  countryCode: {
    marginRight: 12,
    fontWeight: 'bold',
    color: '#000'
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  getOtpButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  getOtpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  terms: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#000',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 32,
    paddingVertical: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
});
