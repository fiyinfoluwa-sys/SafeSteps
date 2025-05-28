import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import CompanionScreen from './src/screens/CompanionScreen';
import DistressLogsScreen from './src/screens/DistressLogsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4B9CD3',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case 'Home':
                return <Feather name="home" size={size} color={color} />;
              case 'Companion':
                return (
                  <MaterialCommunityIcons
                    name="robot-outline"
                    size={size}
                    color={color}
                  />
                );
              case 'Distress':
                return <Feather name="alert-circle" size={size} color={color} />;
              case 'Profile':
                return <Feather name="user" size={size} color={color} />;
              default:
                return null;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Companion" component={CompanionScreen} />
        <Tab.Screen name="Distress" component={DistressLogsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

