import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import HeaderGreeting from '../components/HeaderGreeting';
import WalletBanner from '../components/WalletBanner';
import ShortcutIcons from '../components/ShortcutIcons';
import PromoBanner from '../components/PromoBanner';
import LiveAstrologersList from '../components/LiveAstrologersList';
import OrdersSection from '../components/OrdersSection';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container} >
                <HeaderGreeting />
                <WalletBanner />
                <ShortcutIcons />
                <PromoBanner />
                <LiveAstrologersList />
                <OrdersSection />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    scrollContent: {
        paddingHorizontal: 16,
    },
});
