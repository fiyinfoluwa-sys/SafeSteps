import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CompanionScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your AI Safety Companion</Text>

      {/* Placeholder for the Avatar Model */}
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>[Avatar Placeholder]</Text>
      </View>

      <Text style={styles.description}>
        Your personal AI companion is here to walk with you. Say hi or share how you're feeling.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Chat with Companion"
          onPress={() => navigation.navigate('ChatScreen')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F4F7FC',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  avatarPlaceholder: {
    height: 200,
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 16,
    color: '#555',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

