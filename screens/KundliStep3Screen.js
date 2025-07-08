import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function KundliStep3Screen({ navigation }) {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const months = [
        { label: 'Select Month', value: '' },
        { label: 'Jan', value: 'January' },
        { label: 'Feb', value: 'February' },
        { label: 'Mar', value: 'March' },
        { label: 'Apr', value: 'April' },
        { label: 'May', value: 'May' },
        { label: 'Jun', value: 'June' },
        { label: 'Jul', value: 'July' },
        { label: 'Aug', value: 'August' },
        { label: 'Sep', value: 'September' },
        { label: 'Oct', value: 'October' },
        { label: 'Nov', value: 'November' },
        { label: 'Dec', value: 'December' },
    ];

    const days = [{ label: 'Select Day', value: '' }];
    for (let i = 1; i <= 31; i++) {
        days.push({ label: i.toString(), value: i.toString() });
    }

    const years = [{ label: 'Select Year', value: '' }];
    for (let i = 1950; i <= 2025; i++) {
        years.push({ label: i.toString(), value: i.toString() });
    }

    const handleNext = () => {
        if (!selectedMonth || !selectedDay || !selectedYear) {
            alert('Please select all fields');
            return;
        }
        navigation.navigate('KundliStep4', {
            month: selectedMonth,
            day: selectedDay,
            year: selectedYear,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFD700" barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Kundli</Text>
                <View style={{ width: 24 }} /> {/* Spacer */}
            </View>


            <View style={styles.content}>
                {/* Step Indicators */}
                <View style={styles.stepRow}>
                    {[0, 1, 2, 3, 4].map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.stepCircle,
                                index <= 2 && { backgroundColor: '#FFD700' },
                            ]}
                        >
                            {index === 2 && (
                                <Ionicons name="calendar" size={16} color="#000" />
                            )}
                        </View>
                    ))}
                </View>

                {/* Step Indicator */}
                {/* <View style={styles.stepIndicator}>
                    <View style={styles.filledCircle} />
                    <View style={styles.filledCircle} />

                    <View style={styles.iconCircle}>
                        <MaterialIcons name="date-range" size={16} color="#000" />
                    </View>

                    <View style={styles.emptyCircle} />
                    <View style={styles.emptyCircle} />
                </View> */}

                <Text style={styles.title}>Enter your birth date</Text>

                <View style={styles.row}>
                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedMonth}
                            onValueChange={setSelectedMonth}
                            style={styles.picker}
                        >
                            {months.map((item) => (
                                <Picker.Item key={item.value} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </View>

                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedDay}
                            onValueChange={setSelectedDay}
                            style={styles.picker}
                        >
                            {days.map((item) => (
                                <Picker.Item key={item.value} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </View>

                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedYear}
                            onValueChange={setSelectedYear}
                            style={styles.picker}
                        >
                            {years.map((item) => (
                                <Picker.Item key={item.value} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const CIRCLE_SIZE = 16;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFDE7',
    },
    header: {
        backgroundColor: '#FFD700',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 14,
        elevation: 2,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    backButton: {
        padding: 4,
    },
    content: {
        flex: 1,
        padding: 24,
    },
    stepIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center',
    },
    filledCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#FFD700',
        marginHorizontal: 6,
    },
    iconCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    emptyCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#000',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    pickerWrapper: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#FFD700',
        borderRadius: 8,
        marginHorizontal: 2,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    picker: {
        height: 55,
        width: '110%',
        color: '#000',
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
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
});
