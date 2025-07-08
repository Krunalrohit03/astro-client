import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Modal,
    ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function VerifyOtpScreen({ navigation, route }) {
    const { phone } = route.params;
    const { login } = useContext(UserContext);

    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef([]);
    const [timer, setTimer] = useState(60);
    const [loading, setLoading] = useState(false);

    // Countdown timer
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleOtpChange = (text, index) => {
        if (text.length > 1) text = text.charAt(0);
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleSubmit = () => {
        if (otp.some((d) => d === '')) return;
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            login({ phone });   // <- set user
        }, 2000);
    };

    const handleResend = () => {
        if (timer > 0) return;
        setTimer(60);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Verify Phone</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.sentTextWrapper}>
                    <Text style={styles.sentText}>OTP sent to</Text>
                    <Text style={styles.sentPhone}>{phone}</Text>
                </View>

                <View style={styles.otpRow}>
                    {otp.map((digit, idx) => (
                        <TextInput
                            key={idx}
                            ref={(ref) => (inputs.current[idx] = ref)}
                            value={digit}
                            onChangeText={(text) => handleOtpChange(text, idx)}
                            keyboardType="number-pad"
                            maxLength={1}
                            style={styles.otpInput}
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.resendRow}
                    onPress={handleResend}
                    disabled={timer > 0}
                >
                    <Ionicons
                        name="refresh-circle-outline"
                        size={20}
                        color={timer > 0 ? '#888' : '#008000'}
                    />
                    <Text
                        style={[
                            styles.resendText,
                            { color: timer > 0 ? '#888' : '#008000' },
                        ]}
                    >
                        {timer > 0
                            ? `Resend OTP available in ${timer}s`
                            : 'Resend OTP'}
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal visible={loading} transparent animationType="fade">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <ActivityIndicator size="large" color="#008000" />
                        <Text style={{ marginTop: 12 }}>Please wait</Text>
                    </View>
                </View>
            </Modal>
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
    content: {
        padding: 24,
        alignItems: 'center',
    },
    sentTextWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 24,
    },
    sentText: {
        fontSize: 16,
        textAlign: 'center',
        marginRight: 4,
    },
    sentPhone: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    otpRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#008000',
        borderRadius: 8,
        width: 50,
        height: 50,
        marginHorizontal: 6,
        textAlign: 'center',
        fontSize: 20,
    },
    submitButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 14,
        paddingHorizontal: 60,
        borderRadius: 8,
        marginBottom: 16,
    },
    submitText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    resendRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resendText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 12,
        alignItems: 'center',
    },
});
