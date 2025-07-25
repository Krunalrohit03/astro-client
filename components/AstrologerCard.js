import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RatingStars from './RatingStars';
import AstrologerChatModal from './AstrologerChatModal';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export default function AstrologerCard({ astrologer, onPressChat, onWaitlist }) {
  const { user } = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(false);
  
  const handlePress = () => {
    if (astrologer.isBusy) {
      setModalVisible(true);
      if (onWaitlist) onWaitlist(astrologer);
    } else {
      onPressChat(astrologer);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: astrologer.photo }} style={styles.avatar} />

      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{astrologer.name}</Text>
          {astrologer.isNew && <Text style={styles.newBadge}>NEW!</Text>}
        </View>

        <Text style={styles.specialization}>{astrologer.specialization}</Text>
        <Text style={styles.language}>{astrologer.languages}</Text>
        <Text style={styles.experience}>Exp: {astrologer.experience} Years</Text>

        <RatingStars rating={astrologer.rating} />

        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>₹ {astrologer.oldPrice}</Text>
          <Text style={styles.newPrice}> ₹ {astrologer.newPrice}/min</Text>
        </View>
      </View>

      <TouchableOpacity
        style={astrologer.isBusy ? styles.waitlistButton : styles.chatButton}
        onPress={handlePress}
      >
        <Text style={astrologer.isBusy ? styles.waitlistText : styles.chatButtonText}>
          {astrologer.isBusy ? 'Waitlist' : 'Chat'}
        </Text>
      </TouchableOpacity>

      <AstrologerChatModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        astrologer={astrologer}
        user={user}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFD700',
    marginRight: 12,
  },
  info: { flex: 1 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: { fontSize: 18, fontWeight: 'bold', marginRight: 8 },
  newBadge: { color: 'red', fontSize: 12, fontWeight: 'bold' },
  specialization: { fontSize: 14, color: '#333' },
  language: { fontSize: 13, color: '#666' },
  experience: { fontSize: 13, color: '#666' },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 4,
  },
  newPrice: {
    color: 'red',
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: '#008000',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  waitlistButton: {
    backgroundColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  waitlistText: {
    color: '#555',
    fontWeight: 'bold'
  },
});
