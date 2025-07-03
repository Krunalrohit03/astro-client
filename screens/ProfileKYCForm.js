import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function ProfileKYCForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [address, setAddress] = useState('');

  const phoneNumber = '+91-9876543210';

  const isFormValid = name && gender && dob && timeOfBirth && placeOfBirth && address;

  const onSubmit = () => {
    console.log({
      name,
      gender,
      dob,
      timeOfBirth,
      placeOfBirth,
      address
    });
    alert('Form Submitted!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.profileImage}
        />
        <Text style={styles.phoneText}>{phoneNumber}</Text>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderRow}>
          {['Male', 'Female', 'Other'].map((g) => (
            <TouchableOpacity
              key={g}
              style={[
                styles.genderButton,
                gender === g && styles.genderSelected
              ]}
              onPress={() => setGender(g)}
            >
              <Text style={gender === g ? styles.genderSelectedText : styles.genderText}>{g}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          style={styles.pickerInput}
          onPress={() => setShowDobPicker(true)}
        >
          <Text style={{ color: dob ? '#333' : '#999' }}>
            {dob ? dob : 'Select Date'}
          </Text>
          <Ionicons name="calendar-outline" size={20} color="#FFD700" />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={showDobPicker}
          mode="date"
          onConfirm={(date) => {
            setShowDobPicker(false);
            setDob(date.toDateString());
          }}
          onCancel={() => setShowDobPicker(false)}
        />

        <Text style={styles.label}>Time of Birth</Text>
        <TouchableOpacity
          style={styles.pickerInput}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={{ color: timeOfBirth ? '#333' : '#999' }}>
            {timeOfBirth ? timeOfBirth : 'Select Time'}
          </Text>
          <Ionicons name="time-outline" size={20} color="#FFD700" />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={showTimePicker}
          mode="time"
          onConfirm={(time) => {
            setShowTimePicker(false);
            setTimeOfBirth(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
          }}
          onCancel={() => setShowTimePicker(false)}
        />

        <Text style={styles.label}>Place of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter place"
          value={placeOfBirth}
          onChangeText={setPlaceOfBirth}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter address"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <TouchableOpacity
          style={[styles.submitButton, !isFormValid && styles.buttonDisabled]}
          onPress={onSubmit}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8dc' },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#FFD700',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#e0c200'
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12
  },
  phoneText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold'
  },
  formCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2
  },
  label: {
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
    color: '#333'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8
  },
  genderButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  genderSelected: {
    borderColor: '#FFD700',
    backgroundColor: '#FFF8DC'
  },
  genderText: {
    fontSize: 14,
    color: '#555'
  },
  genderSelectedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222'
  },
  pickerInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 8
  },
  submitButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24
  },
  buttonDisabled: {
    backgroundColor: '#ddd'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#333'
  }
});
