import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DistressLogsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Distress Logs Screen - Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  text: { fontSize:18, color:'#555' }
});

