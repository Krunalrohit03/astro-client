import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function KundliReportScreen({ navigation }) {
  const [selectedTopTab, setSelectedTopTab] = useState('Report');
  const [selectedSubTab, setSelectedSubTab] = useState('General');
  const [selectedPill, setSelectedPill] = useState('General');

  const topTabs = ['Basic', 'Charts', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];
  const subTabs = ['General', 'Remedies', 'Dosha'];
  const pills = ['General', 'Planetary', 'Vimshottari Dasha', 'Yoga'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kundli</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#222" style={{ marginRight: 8 }} />
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share</Text>
            <Ionicons name="logo-whatsapp" size={20} color="#25D366" style={{ marginLeft: 4 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Tabs */}
      <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#fff' }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.topTabs, { justifyContent: 'center', alignItems: 'center' }]}
        >
          {topTabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTopTab(tab)}
              style={[
                styles.topTab,
                selectedTopTab === tab && styles.topTabActive,
              ]}
            >
              <Text
                style={[
                  styles.topTabText,
                  selectedTopTab === tab && styles.topTabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Sub Tabs */}
      <View style={styles.subTabRow}>
        {subTabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedSubTab(tab)}
            style={[
              styles.subTab,
              selectedSubTab === tab && styles.subTabActive,
            ]}
          >
            <Text
              style={[
                styles.subTabText,
                selectedSubTab === tab && styles.subTabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pillsRow}
      >
        {pills.map((pill) => (
          <TouchableOpacity
            key={pill}
            onPress={() => setSelectedPill(pill)}
            style={[
              styles.pill,
              selectedPill === pill && styles.pillActive,
            ]}
          >
            <Text
              style={[
                styles.pillText,
                selectedPill === pill && styles.pillTextActive,
              ]}
            >
              {pill}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.sectionBody}>
            Ascendant is one of the most sought concepts in astrology when it comes to predicting minute events in your life. At the time of birth, the sign that rises in the sky is the person's ascendant. It helps in making predictions about the minute events, unlike your Moon or Sun sign that help in making weekly, monthly or yearly predictions for you. Your ascendant is Aries.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personality</Text>
          <Text style={styles.sectionBody}>
            Those born with the Aries ascendant are brave, assertive, independent, demanding, combative, and quick-tempered. They have a clear, opinionated, and independent mindset. Aries ascendant individuals are associated with good management skills and have a strong command over others. Though they are often free-spirited, they are also giving and kind by nature. When it comes to spending cash, they are somewhat liberal. They like sports plus an exciting lifestyle. In their perspective, a diligent worker is always inventive, realistic, and sensible. They have a habit of acting without thinking, which makes them face immense difficulties in life. They are susceptible to change in terms of fortune and are religious too.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 8,
    //borderBottomLeftRadius: 16,
    //borderBottomRightRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#eee',
    marginLeft: 4,
  },
  shareButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  topTabs: {
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 2,
    height: 40,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topTab: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor : 'black',
     borderRightWidth: 1,
    //  flexDirection: 'row',
    // alignItems: 'center',
  },
  topTabActive: {
    borderBottomWidth: 2,
    borderColor: '#FFD700',
    backgroundColor: '#FFD700',
  },
  topTabText: {
    fontSize: 14,
    color: '#555',
  },
  topTabTextActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  subTabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    marginTop: 2,
    marginBottom: 2,
  },
  subTab: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  subTabActive: {
    borderBottomWidth: 2,
    borderColor: '#FFD700',
  },
  subTabText: {
    fontSize: 14,
    color: '#666',
  },
  subTabTextActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  pillsRow: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  pill: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#fff',
    height: 36,
    marginBottom: 4,
  },
  pillActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  pillText: {
    fontSize: 14,
    color: '#333',
  },
  pillTextActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 0,
    paddingHorizontal: 8,
    paddingTop: 0,
    paddingBottom: 0,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 16,
    marginBottom: 12,
    marginTop: 0,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  sectionBody: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
