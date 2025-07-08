import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import BottomTabNavigator from './BottomTabNavigator';
import PlaceholderScreen from '../components/PlaceholderScreen';
import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { UserContext } from '../context/UserContext';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { user } = useContext(UserContext);

    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity
                style={styles.userSection}
                onPress={() => {
                    props.navigation.closeDrawer();
                    props.navigation.navigate('ProfileKYC');
                }}
            >
                <Image
                    source={user?.photo ? { uri: user.photo } : require('../assets/logo.png')}
                    style={styles.userImage}
                />
                <Text style={styles.userName}>{user?.name || 'User'}</Text>
                <Text style={styles.userPhone}>{user?.phone || '+91-9173738636'}</Text>
            </TouchableOpacity>


            {/* Drawer Links */}
            {[
                { name: 'HomeTabs', icon: 'home-outline', label: 'Home' },
                { name: 'BookPooja', icon: 'leaf-outline', label: 'Book a Pooja' },
                { name: 'CustomerSupportChat', icon: 'headset-outline', label: 'Customer Support Chat' },
                { name: 'Wallet', icon: 'wallet-outline', label: 'Wallet Transactions' },
                { name: 'RedeemGiftCard', icon: 'gift-outline', label: 'Redeem Gift Card' },
                { name: 'OrderHistory', icon: 'time-outline', label: 'Order History' },
                { name: 'AstroRemedy', icon: 'flask-outline', label: 'AstroRemedy' },
                { name: 'AstrologyBlog', icon: 'book-outline', label: 'Astrology Blog' },
                { name: 'ChatAstrologers', icon: 'chatbubbles-outline', label: 'Chat with Astrologers' },
                { name: 'MyFollowing', icon: 'person-add-outline', label: 'My Following' },
                { name: 'FreeServices', icon: 'star-outline', label: 'Free Services' },
                { name: 'Settings', icon: 'settings-outline', label: 'Settings' }
            ].map(item => (
                <DrawerItem
                    key={item.name}
                    label={({ color }) => (
                        <Text style={{ color }}>{item.label}</Text>
                    )}
                    icon={({ color, size }) => (
                        <Ionicons name={item.icon} size={size} color={color} />
                    )}
                    onPress={() => props.navigation.navigate(item.name)}
                />
            ))}

            <View style={styles.socialLinks}>
                <Ionicons
                    name="logo-facebook"
                    size={24}
                    color="#4267B2"
                    onPress={() => Linking.openURL('https://facebook.com')}
                />
                <Ionicons
                    name="logo-instagram"
                    size={24}
                    color="#E1306C"
                    onPress={() => Linking.openURL('https://instagram.com')}
                />
                <Ionicons
                    name="logo-linkedin"
                    size={24}
                    color="#0077B5"
                    onPress={() => Linking.openURL('https://linkedin.com')}
                />
            </View>

            <Text style={styles.versionText}>Version 1.1.366</Text>
        </DrawerContentScrollView>
    );
}

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
            <Drawer.Screen name="BookPooja" component={PlaceholderScreen} />
            <Drawer.Screen name="CustomerSupportChat" component={PlaceholderScreen} />
            <Drawer.Screen name="Wallet" component={WalletScreen} />
            <Drawer.Screen name="RedeemGiftCard" component={PlaceholderScreen} />
            <Drawer.Screen name="OrderHistory" component={PlaceholderScreen} />
            <Drawer.Screen name="AstroRemedy" component={PlaceholderScreen} />
            <Drawer.Screen name="AstrologyBlog" component={PlaceholderScreen} />
            <Drawer.Screen name="ChatAstrologers" component={PlaceholderScreen} />
            <Drawer.Screen name="MyFollowing" component={PlaceholderScreen} />
            <Drawer.Screen name="FreeServices" component={PlaceholderScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    userSection: {
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userPhone: {
        fontSize: 14,
        color: 'gray',
    },
    socialLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20,
    },
    versionText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'gray',
        fontSize: 12,
    },
});
