import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to SafeSteps Home</Text>
      <Button
        title="Go to Alerts"
        onPress={() => navigation.navigate('Alerts')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'center', alignItems: 'center' }
});

