import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AstrologerChatModal({ visible, onClose, astrologer, user }) {
  if (!astrologer) return null;

  const isBusy = astrologer.isBusy;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {/* Close icon */}
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close" size={24} color="#333" />
          </TouchableOpacity>

          <Text style={styles.title}>
            {isBusy ? 'Waitlist Joined!' : 'Ready to Chat'}
          </Text>

          <View style={styles.avatarsRow}>
            <View style={styles.avatarContainer}>
              <Image
                source={user?.photo ? { uri: user.photo } : require('../assets/logo.png')}
                style={styles.avatar}
              />
              <Text style={styles.avatarName}>{user?.name || 'You'}</Text>
            </View>

            <Ionicons
              name={isBusy ? 'time-outline' : 'chatbubble-ellipses-outline'}
              size={32}
              color="#FFD700"
            />

            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: astrologer.photo }}
                style={styles.avatar}
              />
              <Text style={styles.avatarName}>{astrologer.name}</Text>
            </View>
          </View>

          <Text style={styles.message}>
            {isBusy
              ? 'You will receive a chat request when the astrologer is ready. Don’t worry! You will not be charged for missing this session.'
              : 'The astrologer is available now. Click below to start chatting!'}
          </Text>

          {!isBusy && (
            <TouchableOpacity style={styles.chatButton} onPress={onClose}>
              <Text style={styles.chatButtonText}>Start Chat</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    width: 80,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  avatarName: {
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  message: {
    marginTop: 12,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  chatButton: {
    marginTop: 20,
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  chatButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
