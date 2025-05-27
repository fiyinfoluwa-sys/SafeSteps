import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const alerts = [
  { id: '1', title: 'Suspicious Activity', description: 'Reported near Main St and 3rd Ave at 9 PM' },
  { id: '2', title: 'Road Closure', description: 'Elm Street closed due to police investigation' },
  { id: '3', title: 'Missing Person', description: '12-year-old last seen near Riverside Park' },
];

export default function AlertScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertCard}>
            <Text style={styles.alertTitle}>{item.title}</Text>
            <Text style={styles.alertDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  alertCard: {
    backgroundColor: '#fce4ec',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  alertTitle: { fontSize: 18, fontWeight: 'bold' },
  alertDescription: { fontSize: 14, marginTop: 5 },
});

