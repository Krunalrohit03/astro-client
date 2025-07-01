import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatAstrologerScreen from '../screens/ChatAstrologerScreen';
import CustomerSupportChatScreen from '../screens/CustomerSupportChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Chat') {
                        iconName = 'chatbubbles';
                    } else if (route.name === 'Support') {
                        iconName = 'help-circle';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#6a0dad',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={ChatAstrologerScreen} />
            <Tab.Screen name="Support" component={CustomerSupportChatScreen} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="wallet" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />


        </Tab.Navigator>

    );
}
