import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import AstrologerProfileScreen from '../screens/AstrologerProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import CallWithAstrologerScreen from '../screens/CallWithAstrologerScreen';
import WalletScreen from '../screens/WalletScreen';
import RechargeScreen from '../screens/RechargeScreen';
import DrawerNavigator from './DrawerNavigator';
import { UserContext } from '../context/UserContext';
import CustomerSupportChatScreen from '../screens/CustomerSupportChatScreen';
import ProfileKYCForm from '../screens/ProfileKYCForm';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { user } = useContext(UserContext);

    return (
        <Stack.Navigator>
            {!user ? (
                <>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Main"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />


                    <Stack.Screen
                        name="AstrologerProfile"
                        component={AstrologerProfileScreen}
                        options={{ title: 'Astrologer Profile' }}
                    />

                    <Stack.Screen
                        name="ChatScreen"
                        component={ChatScreen}
                        options={({ route }) => ({
                            title: route.params?.astrologer?.name || 'Chat',
                        })}
                    />

                    <Stack.Screen
                        name="CallWithAstrologerScreen"
                        component={CallWithAstrologerScreen}
                        options={{ title: 'Call in Progress' }}
                    />

                    <Stack.Screen
                        name="Wallet"
                        component={WalletScreen}
                        options={{ title: 'Wallet' }}
                    />

                    <Stack.Screen
                        name="RechargeScreen"
                        component={RechargeScreen}
                        options={{ title: 'Recharge Wallet' }}
                    />

                    <Stack.Screen name="CustomerSupportChatScreen"
                        component={CustomerSupportChatScreen} />

                    <Stack.Screen
                        name="ProfileKYC"
                        component={ProfileKYCForm}
                    />
                    <Stack.Screen name="Terms" component={TermsScreen} />
                    <Stack.Screen name="Privacy" component={PrivacyScreen} />

                </>
            )}
        </Stack.Navigator>
    );
}
