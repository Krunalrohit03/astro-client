import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AstroMenu(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfo}>
          <Avatar.Image source={require('../assets/logo.png')} size={60} />
          <Title style={styles.title}>User</Title>
          <Caption>+91-9173738636</Caption>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem icon={({ color }) => <Icon name="home-outline" color={color} size={24} />} label="Home" onPress={() => props.navigation.navigate('Home')} />
          <DrawerItem icon={({ color }) => <Icon name="fire" color={color} size={24} />} label="Book a Pooja" onPress={() => {}} />
          <DrawerItem icon={({ color }) => <Icon name="headset" color={color} size={24} />} label="Customer Support" onPress={() => props.navigation.navigate('CustomerSupportChatScreen')} />
          <DrawerItem icon={({ color }) => <Icon name="wallet" color={color} size={24} />} label="Wallet" onPress={() => props.navigation.navigate('Wallet')} />
          <DrawerItem icon={({ color }) => <Icon name="history" color={color} size={24} />} label="Order History" onPress={() => {}} />
          <DrawerItem icon={({ color }) => <Icon name="leaf" color={color} size={24} />} label="AstroRemedy" onPress={() => {}} />
          <DrawerItem icon={({ color }) => <Icon name="book-open-page-variant" color={color} size={24} />} label="Blog" onPress={() => {}} />
          <DrawerItem icon={({ color }) => <Icon name="account-multiple" color={color} size={24} />} label="My Following" onPress={() => {}} />
          <DrawerItem icon={({ color }) => <Icon name="cog" color={color} size={24} />} label="Settings" onPress={() => {}} />
        </Drawer.Section>
        <Drawer.Section style={styles.bottom}>
          <Text style={styles.version}>Version 1.1.366</Text>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 20,
  },
  bottom: {
    marginTop: 10,
    paddingLeft: 20,
  },
  version: {
    fontSize: 12,
    color: '#777',
  },
});
