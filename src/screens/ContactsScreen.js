import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Linking,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function ContactsScreen() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Mom', phone: '1234567890' },
    { id: '2', name: 'Best Friend', phone: '0987654321' },
    { id: '3', name: 'Work Buddy', phone: '5551234567' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  // Filter contacts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  }, [searchTerm, contacts]);

  // Call phone number
  const handleCall = (phone) => {
    const url = `tel:${phone}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Calling is not supported on this device');
        }
      });
  };

  // Delete contact with confirmation
  const handleDelete = (id) => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: () => {
            setContacts(prev => prev.filter(c => c.id !== id));
          } 
        }
      ]
    );
  };

  // Placeholder add contact
  const handleAddContact = () => {
    Alert.alert('Add Contact', 'Feature coming soon!');
  };

  // Render each contact with call and delete buttons
  const renderContact = ({ item }) => (
    <View style={styles.contactCard}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
      <View style={styles.contactActions}>
        <TouchableOpacity
          style={[styles.button, styles.callButton]}
          onPress={() => handleCall(item.phone)}
        >
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.header}>Emergency Contacts</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCorrect={false}
        clearButtonMode="while-editing"
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={renderContact}
        ListEmptyComponent={<Text style={styles.emptyText}>No contacts found.</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={handleAddContact}
        activeOpacity={0.8}
      >
        <Text style={styles.addButtonText}>+ Add New Contact</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  header: { 
    fontSize: 28, 
    fontWeight: '700', 
    marginBottom: 15, 
    color: '#111' 
  },

  searchInput: {
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },

  contactCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  contactInfo: {
    flex: 1,
  },

  contactName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },

  contactPhone: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },

  contactActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: 10,
    minWidth: 70,
    alignItems: 'center',
  },

  callButton: {
    backgroundColor: '#34C759', // Green for call
  },

  deleteButton: {
    backgroundColor: '#FF3B30', // Red for delete
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },

  separator: {
    height: 12,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#888',
  },

  addButton: {
    backgroundColor: '#007AFF', // Blue for add contact
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

