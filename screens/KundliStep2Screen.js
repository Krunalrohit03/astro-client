import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const genders = [
    { label: 'Male', icon: 'https://img.icons8.com/ios-filled/50/male.png' },
    { label: 'Female', icon: 'https://img.icons8.com/ios-filled/50/female.png' },
    { label: 'Other', icon: 'https://img.icons8.com/ios-filled/50/gender.png' },
];

export default function KundliStep2Screen({ navigation, route }) {
    const [selected, setSelected] = useState(null);

    const handleSelect = (label) => {
        setSelected(label);
        // After selection, navigate to Step 3 (add screen later)
        // navigation.navigate('KundliStep3', { name: route.params.name, gender: label });
        navigation.navigate('KundliStep3', {
            name: route.params.name,
            gender: selected,
        });

    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fefbe9' }}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Kundli</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Step Indicators */}
            <View style={styles.stepRow}>
                {[0, 1, 2, 3, 4].map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.stepCircle,
                            index <= 1 && { backgroundColor: '#FFD700' },
                        ]}
                    >
                        {index === 1 && (
                            <Ionicons name="female" size={16} color="#000" />
                        )}
                    </View>
                ))}
            </View>

            {/* Gender Selection */}
            <View style={styles.formContainer}>
                <Text style={styles.question}>What is your gender?</Text>

                <View style={styles.genderRow}>
                    {genders.map((item) => (
                        <TouchableOpacity
                            key={item.label}
                            style={[
                                styles.genderCard,
                                selected === item.label && styles.selectedCard,
                            ]}
                            onPress={() => handleSelect(item.label)}
                        >
                            <Image source={{ uri: item.icon }} style={styles.genderIcon} />
                            <Text style={styles.genderLabel}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFD700',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stepRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
    },
    stepCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    genderRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    genderCard: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 50,
        padding: 12,
        width: 80,
        height: 80,
        marginHorizontal: 10,
        backgroundColor: '#fff',
    },
    selectedCard: {
        backgroundColor: '#fffde7',
        borderWidth: 2,
    },
    genderIcon: {
        width: 30,
        height: 30,
        marginBottom: 4,
        tintColor: '#444',
    },
    genderLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
});
