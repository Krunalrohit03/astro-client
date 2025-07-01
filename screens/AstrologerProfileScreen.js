import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AstrologerProfileScreen({ route, navigation }) {
    const { astrologer } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: astrologer.photo }} style={styles.photo} />
            <Text style={styles.name}>{astrologer.name}</Text>
            <Text style={styles.specialization}>{astrologer.specialization}</Text>
            <Text style={styles.languages}>Languages: {astrologer.languages}</Text>
            <Text style={styles.experience}>Experience: {astrologer.experience} Years</Text>
            <Text style={styles.rating}>Rating: {astrologer.rating} ⭐</Text>
            <Text style={styles.description}>
                This astrologer is an expert in {astrologer.specialization}. They have helped many clients with insightful readings.
            </Text>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ChatScreen', { astrologer })}
                >
                    <Text style={styles.buttonText}>💬 Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('CallWithAstrologerScreen', { astrologer })}
                >
                    <Text style={styles.buttonText}>📞 Call</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    photo: { width: 150, height: 150, borderRadius: 75, alignSelf: 'center', marginBottom: 16 },
    name: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 4 },
    specialization: { textAlign: 'center', fontSize: 16, marginBottom: 4 },
    languages: { textAlign: 'center', fontSize: 14, color: '#666', marginBottom: 2 },
    experience: { textAlign: 'center', fontSize: 14, color: '#666', marginBottom: 2 },
    rating: { textAlign: 'center', fontSize: 14, color: '#f5c518', marginBottom: 16 },
    description: { fontSize: 14, color: '#333', marginBottom: 20, lineHeight: 20 },
    buttonRow: { flexDirection: 'row', justifyContent: 'space-around' },
    button: { backgroundColor: '#f5c518', paddingVertical: 10, paddingHorizontal: 24, borderRadius: 8 },
    buttonText: { fontWeight: 'bold', fontSize: 16 },
});
