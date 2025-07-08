import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function KundliStep4Screen({ navigation }) {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [ampm, setAmPm] = useState('');
    const [noExactTime, setNoExactTime] = useState(false);

    const hours = [{ label: 'Hour', value: '' }];
    for (let i = 1; i <= 12; i++) {
        hours.push({ label: i.toString(), value: i.toString() });
    }

    const minutes = [{ label: 'Minute', value: '' }];
    for (let i = 0; i < 60; i++) {
        minutes.push({ label: i.toString().padStart(2, '0'), value: i.toString().padStart(2, '0') });
    }

    const ampmOptions = [
        { label: 'AM/PM', value: '' },
        { label: 'AM', value: 'AM' },
        { label: 'PM', value: 'PM' },
    ];

    const handleNext = () => {
        if (!noExactTime && (!hour || !minute || !ampm)) {
            alert('Please select your birth time');
            return;
        }
        navigation.navigate('KundliStep5', {
            hour,
            minute,
            ampm,
            noExactTime,
        });
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Kundli</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Step Indicator */}
                <View style={styles.stepIndicator}>
                    {[0, 1, 2, 3, 4].map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.stepCircle,
                                index <= 3 && { backgroundColor: '#FFD700' },
                            ]}
                        >
                            {index === 3 && (
                                <Ionicons name="time" size={16} color="#000" />
                            )}
                        </View>
                    ))}
                </View>

                {/* Title */}
                <Text style={styles.title}>Enter your birth time</Text>

                {/* Pickers */}
                {!noExactTime && (
                    <View style={styles.pickerRow}>
                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={hour}
                                onValueChange={(val) => setHour(val)}
                                style={styles.picker}
                            >
                                {hours.map((item) => (
                                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.colon}>:</Text>

                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={minute}
                                onValueChange={(val) => setMinute(val)}
                                style={styles.picker}
                            >
                                {minutes.map((item) => (
                                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={ampm}
                                onValueChange={(val) => setAmPm(val)}
                                style={styles.picker}
                            >
                                {ampmOptions.map((item) => (
                                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                )}

                {/* Checkbox */}
                <View style={styles.checkboxRow}>

                    <CheckBox
                        title="Don't know my exact time of birth"
                        checked={noExactTime}
                        onPress={() => setNoExactTime(!noExactTime)}
                        containerStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            padding: 0,
                        }}
                        textStyle={styles.checkboxLabel}
                    />
                </View>




                <Text style={styles.note}>
                    Note: Without time of birth, we can still achieve up to 80% accurate predictions
                </Text>

                {/* Next Button */}
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
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
    stepIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    stepCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FFD700',
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    pickerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 8,
        marginHorizontal: 4,
        width: 80,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '200%',
    },
    colon: {
        fontSize: 24,
        marginHorizontal: 4,
        fontWeight: 'bold',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 12,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
    },
    note: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
        marginHorizontal: 24,
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 40,
        marginBottom: 40,
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
