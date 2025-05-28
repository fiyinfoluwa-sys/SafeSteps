import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const options = [
  { label: 'Profile', icon: 'person-outline', screen: 'ProfileDetails' },
  { label: 'Notifications', icon: 'notifications-outline', screen: 'Notifications' },
  { label: 'Settings', icon: 'settings-outline', screen: 'Settings' },
  { label: 'Safety Tools', icon: 'shield-checkmark-outline', screen: 'SafetyTools' },
  { label: 'Privacy & Security', icon: 'lock-closed-outline', screen: 'PrivacySecurity' },
  { label: 'Help & Support', icon: 'help-circle-outline', screen: 'HelpSupport' },
  { label: 'About', icon: 'information-circle-outline', screen: 'About' },
  { label: 'Logout', icon: 'log-out-outline', screen: 'Logout' },
];

const ProfileHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#101010]">
      <ScrollView className="px-4 pt-6">
        <Text className="text-white text-2xl font-semibold mb-6">Settings</Text>

        <View className="space-y-3">
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.screen)}
              className="flex-row items-center justify-between bg-[#1c1c1e] px-4 py-4 rounded-2xl"
              activeOpacity={0.7}
            >
              <View className="flex-row items-center">
                <Icon name={item.icon} size={22} color="#d1d1d6" />
                <Text className="text-[#e5e5e5] text-base ml-4">{item.label}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#7c7c80" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileHomeScreen;

