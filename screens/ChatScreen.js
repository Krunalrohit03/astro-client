import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppContainer from '../components/AppContainer';

export default function ChatScreen({ route }) {
    const { astrologer } = route.params;
    const [messages, setMessages] = useState([
        { id: '1', text: `Hi, I am ${astrologer.name}. How can I help you?`, isUser: false },
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, {
            id: Date.now().toString(),
            text: input,
            isUser: true,
            time: new Date().toLocaleTimeString(),
        }]);

        setInput('');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <AppContainer>

                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={80}
                >
                    <FlatList
                        data={messages}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View
                                style={[
                                    styles.messageRow,
                                    item.isUser ? styles.userRow : styles.astroRow,
                                ]}
                            >
                                {!item.isUser && (
                                    <Image
                                        source={{ uri: astrologer.photo }}
                                        style={styles.avatar}
                                    />
                                )}
                                <View
                                    style={[
                                        styles.bubble,
                                        item.isUser ? styles.userBubble : styles.astroBubble,
                                    ]}
                                >
                                    <Text style={styles.messageText}>{item.text}</Text>
                                    <Text style={styles.timestamp}>{item.time || 'just now'}</Text>
                                </View>
                            </View>
                        )}

                        contentContainerStyle={styles.chatArea}
                        inverted
                    />

                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your message..."
                            value={input}
                            onChangeText={setInput}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                            <Text style={styles.sendText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </AppContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? 25 : 0, },
    chatArea: { padding: 16 },
    bubble: { padding: 10, marginVertical: 4, borderRadius: 10, maxWidth: '75%' },
    userBubble: { backgroundColor: '#d1e7ff', alignSelf: 'flex-end' },
    astroBubble: { backgroundColor: '#e6e6e6', alignSelf: 'flex-start' },
    inputRow: { flexDirection: 'row', padding: 8, borderTopWidth: 1, borderColor: '#ddd', alignItems: 'center' },
    input: { flex: 1, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, marginRight: 8 },
    sendButton: { backgroundColor: '#6a0dad', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
    sendText: { color: '#fff', fontWeight: 'bold' },
    safeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 6,
    },

    astroRow: {
        justifyContent: 'flex-start',
    },

    userRow: {
        justifyContent: 'flex-end',
    },

    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },

    bubble: {
        maxWidth: '70%',
        padding: 10,
        borderRadius: 12,
    },

    astroBubble: {
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 0,
    },

    userBubble: {
        backgroundColor: '#d1e7ff',
        borderTopRightRadius: 0,
    },

    messageText: {
        fontSize: 16,
    },

    timestamp: {
        fontSize: 10,
        color: '#888',
        marginTop: 4,
        alignSelf: 'flex-end',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        paddingHorizontal: 16,
    },
});
