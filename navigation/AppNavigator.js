import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import DrawerNavigator from './DrawerNavigator';
import AstrologerProfileScreen from '../screens/AstrologerProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import CallWithAstrologerScreen from '../screens/CallWithAstrologerScreen';
import WalletScreen from '../screens/WalletScreen';
import RechargeScreen from '../screens/RechargeScreen';
import CustomerSupportChatScreen from '../screens/CustomerSupportChatScreen';
import ProfileKYCForm from '../screens/ProfileKYCForm';
import TermsScreen from '../screens/TermsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import DailyHoroscopeScreen from '../screens/DailyHoroscopeScreen';

import { UserContext } from '../context/UserContext';
import FreeKundliScreen from '../screens/FreeKundliScreen';
import KundliStep1Screen from '../screens/KundliStep1Screen';
import KundliStep2Screen from '../screens/KundliStep2Screen';
import KundliStep3Screen from '../screens/KundliStep3Screen';
import KundliStep4Screen from '../screens/KundliStep4Screen';
import KundliStep5Screen from '../screens/KundliStep5Screen';
import PlaceSearchScreen from '../screens/PlaceSearchScreen';
import KundliReportScreen from '../screens/KundliReportScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { user } = useContext(UserContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!user ? (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
                    <Stack.Screen name="Terms" component={TermsScreen} />
                    <Stack.Screen name="Privacy" component={PrivacyScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Main" component={DrawerNavigator} />

                    <Stack.Screen name="AstrologerProfile" component={AstrologerProfileScreen} />

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

                    <Stack.Screen name="Wallet" component={WalletScreen} />
                    <Stack.Screen name="RechargeScreen" component={RechargeScreen} />

                    <Stack.Screen
                        name="CustomerSupportChatScreen"
                        component={CustomerSupportChatScreen}
                    />

                    <Stack.Screen name="ProfileKYC" component={ProfileKYCForm} />
                    <Stack.Screen name="DailyHoroscope" component={DailyHoroscopeScreen} />
                    <Stack.Screen name="FreeKundli" component={FreeKundliScreen} />
                    <Stack.Screen
                        name="KundliStep1"
                        component={KundliStep1Screen}
                    />
                    <Stack.Screen name="KundliStep2" component={KundliStep2Screen} />
                    <Stack.Screen name="KundliStep3" component={KundliStep3Screen} />
                    <Stack.Screen
                        name="KundliStep4"
                        component={KundliStep4Screen}
                    />
                    <Stack.Screen name="KundliStep5" component={KundliStep5Screen} />
                    <Stack.Screen name="PlaceSearchScreen" component={PlaceSearchScreen} />
                    <Stack.Screen name="KundliReport" component={KundliReportScreen} />

                </>
            )}
        </Stack.Navigator>
    );
}
