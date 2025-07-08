import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  ActivityIndicator,
  Text
} from 'react-native';

import HeaderGreeting from '../components/HeaderGreeting';
import WalletBanner from '../components/WalletBanner';
import ShortcutIcons from '../components/ShortcutIcons';
import PromoBanner from '../components/PromoBanner';
import OrdersSection from '../components/OrdersSection';
import AstrologerCard from '../components/AstrologerCard';

export default function HomeScreen({ navigation }) {
  const [astrologers, setAstrologers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAstrologers() {
      try {
        const response = await fetch('http://192.168.31.147:5000/astrologers');
        const data = await response.json();
        setAstrologers(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAstrologers();
  }, []);

  const handleChatPress = (astrologer) => {
    navigation.navigate('AstrologerProfile', {
      astrologer: {
        name: astrologer.name,
        photo: astrologer.photo,
        specialization: astrologer.specialization,
        languages: astrologer.languages,
        experience: astrologer.experience,
        rating: astrologer.rating,
        oldPrice: astrologer.oldPrice,
        newPrice: astrologer.newPrice,
        isBusy: astrologer.isBusy
      }
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={{ marginTop: 12 }}>Loading astrologers...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={astrologers}
        keyExtractor={(item) => item._id?.toString() || item.id}
        renderItem={({ item }) => (
          <AstrologerCard
            astrologer={{
              id: item._id,
              name: item.name,
              specialization: item.specialization,
              languages: item.languages,
              experience: item.experience,
              oldPrice: item.oldPrice,
              newPrice: item.newPrice,
              isNew: item.isNewAstrologer,
              photo: item.photo,
              rating: item.rating,
              isBusy: item.isBusy,
            }}
            onPressChat={handleChatPress}
          />
        )}
        ListHeaderComponent={
          <>
            <HeaderGreeting navigation={navigation} />
            <WalletBanner />
            <ShortcutIcons navigation={navigation}/>
            <PromoBanner />
          </>
        }
        ListFooterComponent={<OrdersSection />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
