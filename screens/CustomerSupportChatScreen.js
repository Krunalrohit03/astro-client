import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';

export default function CustomerSupportChatScreen({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* User Card */}
        <View style={styles.card}>
          <View style={styles.userInfo}>
            <Image
              source={user?.photo ? { uri: user.photo } : require('../assets/logo.png')}
              style={styles.userImage}
            />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{user?.name || 'User'}</Text>
              <Text style={styles.userPhone}>{user?.phone || '+91XXXXXXXXXX'}</Text>
            </View>
          </View>
          <View style={styles.walletInfo}>
            <Text style={styles.walletLabel}>Wallet Balance</Text>
            <Text style={styles.walletAmount}>₹ {user?.walletBalance || '20'}</Text>
            <TouchableOpacity style={styles.rechargeButton}>
              <Text style={styles.rechargeText}>Recharge</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Shortcuts */}
        <View style={styles.shortcutRow}>
          <ShortcutItem icon="time-outline" label="My Orders" />
          <ShortcutItem icon="wallet-outline" label="My Wallet" />
          <ShortcutItem icon="person-outline" label="Astrologer Assistant" />
        </View>

        {/* Support Option */}
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="headset-outline" size={20} color="gray" />
          <Text style={styles.listLabel}>Customer Support</Text>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Section: Account & Settings */}
        <Text style={styles.sectionHeader}>Account & Settings</Text>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="heart-outline" size={20} color="gray" />
          <Text style={styles.listLabel}>Favorite Astrologers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="settings-outline" size={20} color="gray" />
          <Text style={styles.listLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
          <Text style={styles.listLabel}>Manage My Privacy</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function ShortcutItem({ icon, label }) {
  return (
    <TouchableOpacity style={styles.shortcutItem}>
      <Ionicons name={icon} size={24} color="#555" />
      <Text style={styles.shortcutText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 16,
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  scrollContent: {
    paddingBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12
  },
  userDetails: {
    flex: 1
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  userPhone: {
    fontSize: 13,
    color: 'gray'
  },
  walletInfo: {
    backgroundColor: '#FFF8DC',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  walletLabel: {
    flex: 1,
    color: 'gray'
  },
  walletAmount: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12
  },
  rechargeButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6
  },
  rechargeText: {
    fontWeight: 'bold'
  },
  shortcutRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginHorizontal: 16
  },
  shortcutItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 1,
    flex: 1,
    marginHorizontal: 6
  },
  shortcutText: {
    marginTop: 6,
    fontSize: 12,
    color: '#555'
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 1,
    justifyContent: 'space-between'
  },
  listLabel: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15
  },
  sectionHeader: {
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#333'
  }
});
