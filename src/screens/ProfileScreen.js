import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Options for dropdown-like inputs
const pronounsOptions = ['She/Her', 'He/Him', 'They/Them', 'Other'];
const languageOptions = ['English', 'French', 'Spanish'];

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Form state
  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('She/Her');
  const [language, setLanguage] = useState('English');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [recordAudioVideo, setRecordAudioVideo] = useState(false);
  const [defaultAlertMessage, setDefaultAlertMessage] = useState('');
  const [preferredContacts, setPreferredContacts] = useState('');

  // Dropdown visibility states
  const [pronounsDropdownVisible, setPronounsDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  // Placeholder profile photo URI (null means no photo)
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Colors based on dark mode
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const backgroundColor = isDarkMode ? '#121212' : '#FFFFFF';
  const inputBackground = isDarkMode ? '#222222' : '#EEEEEE';
  const borderColor = isDarkMode ? '#444444' : '#CCCCCC';
  const buttonBackground = isDarkMode ? '#1E90FF' : '#007AFF';

  // Save handler
  const handleSave = () => {
    Alert.alert(
      'Profile Saved',
      `Name: ${name}
Pronouns: ${pronouns}
Language: ${language}
Notifications: ${notificationsEnabled ? 'On' : 'Off'}
Record Video/Audio: ${recordAudioVideo ? 'Enabled' : 'Disabled'}
Default Alert Message: ${defaultAlertMessage}
Preferred Contacts: ${preferredContacts}
Profile Photo: ${profilePhoto ? 'Set' : 'Not set'}
      `
    );
  };

  // Dropdown item component
  const DropdownItem = ({ label, onPress }) => (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? isDarkMode
              ? '#444'
              : '#ddd'
            : inputBackground,
        },
        styles.dropdownItem,
      ]}
    >
      <Text style={{ color: textColor }}>{label}</Text>
    </Pressable>
  );

  // Handle profile photo select placeholder (you can replace with ImagePicker)
  const handleSelectProfilePhoto = () => {
    Alert.alert('Profile Photo', 'Photo upload not implemented yet.');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.heading, { color: textColor }]}>
          Profile Settings
        </Text>

        {/* Profile Photo Section */}
        <View style={styles.photoSection}>
          {profilePhoto ? (
            <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
          ) : (
            <View
              style={[
                styles.profilePhotoPlaceholder,
                { backgroundColor: inputBackground, borderColor },
              ]}
            >
              <Text style={{ color: textColor, fontSize: 24 }}>👤</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={handleSelectProfilePhoto}
            style={[styles.photoButton, { backgroundColor: buttonBackground }]}
            activeOpacity={0.8}
          >
            <Text style={styles.photoButtonText}>
              {profilePhoto ? 'Change Photo' : 'Add Profile Photo'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Name */}
        <View style={styles.formGroup}>
          <Text style={[styles.label, { color: textColor }]}>Name</Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: inputBackground, color: textColor, borderColor },
            ]}
            placeholder="Enter your name"
            placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        {/* Pronouns - behaves like dropdown */}
        <View style={styles.formGroup}>
          <Text style={[styles.label, { color: textColor }]}>Pronouns</Text>
          <TouchableOpacity
            onPress={() => setPronounsDropdownVisible(true)}
            style={[
              styles.input,
              styles.dropdownInput,
              { backgroundColor: inputBackground, borderColor },
            ]}
          >
            <Text style={{ color: textColor }}>{pronouns}</Text>
          </TouchableOpacity>
        </View>

        {/* Language - behaves like dropdown */}
        <View style={styles.formGroup}>
          <Text style={[styles.label, { color: textColor }]}>Language</Text>
          <TouchableOpacity
            onPress={() => setLanguageDropdownVisible(true)}
            style={[
              styles.input,
              styles.dropdownInput,
              { backgroundColor: inputBackground, borderColor },
            ]}
          >
            <Text style={{ color: textColor }}>{language}</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications toggle */}
        <View
          style={[styles.formGroupRow, { borderColor, marginTop: 10, marginBottom: 20 }]}
        >
          <Text style={[styles.label, { color: textColor }]}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        {/* Record Video/Audio toggle */}
        <View
          style={[styles.formGroupRow, { borderColor, marginBottom: 20 }]}
        >
          <Text style={[styles.label, { color: textColor }]}>Record Video/Audio</Text>
          <Switch
            value={recordAudioVideo}
            onValueChange={setRecordAudioVideo}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={recordAudioVideo ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>

        {/* Default Alert Message */}
        <View style={styles.formGroup}>
          <Text style={[styles.label, { color: textColor }]}>Default Alert Message</Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: inputBackground, color: textColor, borderColor, height: 80 },
            ]}
            placeholder="Enter default alert message"
            placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
            value={defaultAlertMessage}
            onChangeText={setDefaultAlertMessage}
            multiline
          />
        </View>

        {/* Preferred Emergency Contacts */}
        <View style={styles.formGroup}>
          <Text style={[styles.label, { color: textColor }]}>
            Preferred Emergency Contacts
          </Text>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: inputBackground, color: textColor, borderColor, height: 80 },
            ]}
            placeholder="Enter contact names or numbers"
            placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
            value={preferredContacts}
            onChangeText={setPreferredContacts}
            multiline
          />
        </View>

        {/* Save button */}
        <TouchableOpacity
          onPress={handleSave}
          style={[styles.saveButton, { backgroundColor: buttonBackground }]}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </TouchableOpacity>

        {/* Pronouns Dropdown Modal */}
        <Modal
          visible={pronounsDropdownVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setPronounsDropdownVisible(false)}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setPronounsDropdownVisible(false)}
          >
            <View style={[styles.modalContent, { backgroundColor }]}>
              <FlatList
                data={pronounsOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <DropdownItem
                    label={item}
                    onPress={() => {
                      setPronouns(item);
                      setPronounsDropdownVisible(false);
                    }}
                  />
                )}
              />
            </View>
          </Pressable>
        </Modal>

        {/* Language Dropdown Modal */}
        <Modal
          visible={languageDropdownVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setLanguageDropdownVisible(false)}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setLanguageDropdownVisible(false)}
          >
            <View style={[styles.modalContent, { backgroundColor }]}>
              <FlatList
                data={languageOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <DropdownItem
                    label={item}
                    onPress={() => {
                      setLanguage(item);
                      setLanguageDropdownVisible(false);
                    }}
                  />
                )}
              />
            </View>
          </Pressable>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  profilePhotoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  photoButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  photoButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  dropdownInput: {
    justifyContent: 'center',
  },
  formGroupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  modalContent: {
    borderRadius: 12,
    maxHeight: 250,
    paddingVertical: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
});

