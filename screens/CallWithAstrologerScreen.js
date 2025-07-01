import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CallWithAstrologerScreen({ route, navigation }) {
  const { astrologer } = route.params;
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const endCall = () => {
    console.log('Call ended');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: astrologer.photo }} style={styles.avatar} />
      <Text style={styles.name}>{astrologer.name}</Text>
      <Text style={styles.specialization}>{astrologer.specialization}</Text>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>

      <TouchableOpacity style={styles.endButton} onPress={endCall}>
        <Text style={styles.endButtonText}>End Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  specialization: { fontSize: 16, color: '#555', marginBottom: 20 },
  timer: { fontSize: 32, fontWeight: 'bold', marginBottom: 30, color: '#6a0dad' },
  endButton: { backgroundColor: '#ff4d4d', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8 },
  endButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
