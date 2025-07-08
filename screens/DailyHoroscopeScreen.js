import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DailyHoroscopeScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedSign, setSelectedSign] = useState('Aquarius');


const zodiacSigns = [
  { name: 'Scorpio', image: 'https://img.icons8.com/color/96/scorpio.png' },
  { name: 'Sagittarius', image: 'https://img.icons8.com/color/96/sagittarius.png' },
  { name: 'Capricorn', image: 'https://img.icons8.com/color/96/capricorn.png' },
  { name: 'Aquarius', image: 'https://img.icons8.com/color/96/aquarius.png' },
  { name: 'Pisces', image: 'https://img.icons8.com/color/96/pisces.png' },
];

  const liveAstrologers = [
    { id: '1', name: 'Tarot Ritika', photo: 'https://randomuser.me/api/portraits/women/45.jpg' },
    { id: '2', name: 'Keyara', photo: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { id: '3', name: 'Astro Neelaya', photo: 'https://randomuser.me/api/portraits/women/47.jpg' },
  ];

  const horoscopeDetails = [
    { icon: 'heart-outline', title: 'Love', text: 'Someone who didn’t think you had anything in common with might surprise you.', percentage: 80, color: '#ffe5e5', borderColor: '#f99' },
    { icon: 'briefcase-outline', title: 'Career', text: 'Don’t be afraid to look for a new job if you aren’t happy.', percentage: 80, color: '#fff5e0', borderColor: '#fcb' },
    { icon: 'cash-outline', title: 'Money', text: 'Your desires are all within reach.', percentage: 60, color: '#e8f8e0', borderColor: '#cfc' },
    { icon: 'fitness-outline', title: 'Health', text: 'Put your energy into creating the best version of you.', percentage: 20, color: '#e0f7ff', borderColor: '#b3ecff' },
    { icon: 'airplane-outline', title: 'Travel', text: 'Wanderlust is at an all-time high for you right now.', percentage: 100, color: '#f9e0f9', borderColor: '#f3c0f3' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Daily Horoscope</Text>
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Zodiac Signs Horizontal */}
        <FlatList
          data={zodiacSigns}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.name + index}
          style={{ paddingVertical: 12, paddingLeft: 12 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.signItem,
                selectedSign === item.name && styles.signItemSelected
              ]}
              onPress={() => setSelectedSign(item.name)}
            >
              <Image source={{ uri: item.image }} style={styles.signImage} />
              <Text style={styles.signName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Date Tabs */}
        <View style={styles.dateTabs}>
          {['Yesterday', 'Today', 'Tomorrow'].map(date => (
            <TouchableOpacity
              key={date}
              style={[styles.dateTab, selectedDate === date && styles.dateTabActive]}
              onPress={() => setSelectedDate(date)}
            >
              <Text style={selectedDate === date ? styles.dateTabTextActive : styles.dateTabText}>{date}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Horoscope Card */}
        <View style={styles.horoscopeCard}>
          <Text style={styles.horoscopeDate}>03-07-2025</Text>
          <Text style={styles.horoscopeReady}>Your Daily horoscope is ready!</Text>
          <View style={styles.horoscopeRow}>
            <Text style={styles.horoscopeLabel}>Lucky Colours</Text>
            <View style={styles.colorDots}>
              <View style={[styles.colorDot, { backgroundColor: 'green' }]} />
              <View style={[styles.colorDot, { backgroundColor: 'cyan' }]} />
            </View>
          </View>
          <View style={styles.horoscopeRow}>
            <Text style={styles.horoscopeLabel}>Mood of day</Text>
            <Text>😊</Text>
          </View>
          <View style={styles.horoscopeRow}>
            <Text style={styles.horoscopeLabel}>Lucky Number</Text>
            <Text>1</Text>
          </View>
          <View style={styles.horoscopeRow}>
            <Text style={styles.horoscopeLabel}>Lucky Time</Text>
            <Text>05:43 PM</Text>
          </View>
        </View>

        {/* Daily Horoscope Sections */}
        <Text style={styles.sectionTitle}>Daily Horoscope</Text>
        {horoscopeDetails.map((item, idx) => (
          <View key={idx} style={[styles.detailCard, { backgroundColor: item.color, borderColor: item.borderColor }]}>
            <View style={styles.detailHeader}>
              <Ionicons name={item.icon} size={20} color="#000" />
              <Text style={styles.detailTitle}>{item.title}</Text>
              <Text style={styles.detailPercentage}>{item.percentage}%</Text>
            </View>
            <Text style={styles.detailText}>{item.text}</Text>
          </View>
        ))}

        {/* Live Astrologers */}
        <View style={{ marginTop: 24 }}>
          <View style={styles.liveHeader}>
            <Text style={styles.sectionTitle}>Live Astrologers</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={liveAstrologers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingLeft: 12, paddingBottom: 24 }}
            renderItem={({ item }) => (
              <View style={styles.liveItem}>
                <Image source={{ uri: item.photo }} style={styles.livePhoto} />
                <Text style={styles.liveName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Fixed Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.chatButton}>
          <Ionicons name="chatbubbles-outline" size={20} color="#000" />
          <Text style={styles.buttonText}>Chat with Astrologer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call-outline" size={20} color="#000" />
          <Text style={styles.buttonText}>Call with Astrologer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  signItem: {
    alignItems: 'center',
    marginRight: 16
  },
  signImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 4
  },
  signItemSelected: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700'
  },
  signName: {
    fontSize: 12
  },
  dateTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12
  },
  dateTab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee'
  },
  dateTabActive: {
    backgroundColor: '#FFD700'
  },
  dateTabText: {
    fontSize: 14,
    color: '#333'
  },
  dateTabTextActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  horoscopeCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2
  },
  horoscopeDate: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4
  },
  horoscopeReady: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 12
  },
  horoscopeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  horoscopeLabel: {
    fontWeight: 'bold'
  },
  colorDots: {
    flexDirection: 'row'
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginLeft: 4
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8
  },
  detailCard: {
    marginHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 12
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  detailTitle: {
    fontWeight: 'bold',
    marginLeft: 6,
    flex: 1
  },
  detailPercentage: {
    fontWeight: 'bold'
  },
  detailText: {
    fontSize: 13,
    color: '#333'
  },
  liveHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8
  },
  viewAll: {
    color: '#008000',
    fontWeight: 'bold'
  },
  liveItem: {
    alignItems: 'center',
    marginRight: 12
  },
  livePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 4
  },
  liveName: {
    fontSize: 14
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  chatButton: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20
  },
  callButton: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20
  },
  buttonText: {
    marginLeft: 6,
    fontWeight: 'bold'
  }
});
