import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import AstrologerProfileScreen from '../screens/AstrologerProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import CallWithAstrologerScreen from '../screens/CallWithAstrologerScreen';
import WalletScreen from '../screens/WalletScreen';
import RechargeScreen from '../screens/RechargeScreen';

import { UserContext } from '../context/UserContext';

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
            name="MainTabs"
            component={BottomTabNavigator}
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
        </>
      )}
    </Stack.Navigator>
  );
}
