import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [liveEvents, setLiveEvents] = useState(true);
  const [showName, setShowName] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Settings</Text>

      {/* Notifications Card */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Astromall chat</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#ccc', true: '#FFD700' }}
            thumbColor={Platform.OS === 'android' ? '#fff' : ''}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Live Events</Text>
          <Switch
            value={liveEvents}
            onValueChange={setLiveEvents}
            trackColor={{ false: '#ccc', true: '#FFD700' }}
            thumbColor={Platform.OS === 'android' ? '#fff' : ''}
          />
        </View>
      </View>

      {/* Privacy Card */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.switchRow}>
          <Text style={styles.label}>
            Show my name in reviews section of astrologer's profile
          </Text>
          <Switch
            value={showName}
            onValueChange={setShowName}
            trackColor={{ false: '#ccc', true: '#FFD700' }}
            thumbColor={Platform.OS === 'android' ? '#fff' : ''}
          />
        </View>
      </View>

      {/* Dark Mode */}
      <View style={styles.card}>
        <View style={styles.switchRow}>
          <Text style={styles.label}>🌙 Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#ccc', true: '#FFD700' }}
            thumbColor={Platform.OS === 'android' ? '#fff' : ''}
          />
        </View>
      </View>

      {/* Language Picker */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Change App Language</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={language}
            onValueChange={(value) => setLanguage(value)}
            style={{ height: 48 }}
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Hindi" value="Hindi" />
            <Picker.Item label="Gujarati" value="Gujarati" />
          </Picker>
        </View>
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.navCard} onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.navText}>Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navCard} onPress={() => navigation.navigate('Privacy')}>
        <Text style={styles.navText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.navCard}>
        <View style={styles.row}>
          <Ionicons name="log-out-outline" size={20} color="#555" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>

      {/* Delete */}
      <TouchableOpacity style={styles.navCard}>
        <View style={styles.row}>
          <Ionicons name="trash-outline" size={20} color="#e74c3c" style={{ marginRight: 8 }} />
          <Text style={styles.deleteText}>Delete my account</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    color: '#444',
    fontSize: 14,
    marginRight: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  navCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    marginBottom: 12,
  },
  navText: {
    fontSize: 15,
    color: '#0a8754',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  deleteText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#e74c3c',
  },
});
