import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { devices } from './deviceData';
import type { RootStackParamList } from './StackNavigation';
import { styles } from '../Styles/HomeStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Home screen = dashboard.
// It shows the device cards and lets the user open a selected device.
export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <Ionicons name="home-outline" size={25} color="#2E6BCE" />
          </View>
          <View>
            <Text style={styles.eyebrow}>SMART HOME</Text>
            <Text style={styles.title}>Dashboard</Text>
          </View>
          <View style={styles.headerBadge}>
            <Ionicons name="wifi" size={17} color="#2E9E68" />
          </View>
        </View>

        <View style={styles.welcomeBlock}>
          <Text style={styles.welcomeTitle}>Welcome home, Student.</Text>
          <Text style={styles.welcomeText}>Your devices are ready when you are.</Text>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Your devices</Text>
          <Text style={styles.deviceCount}>{devices.length} connected</Text>
        </View>

        <View style={styles.deviceGrid}>
          {devices.map((device) => (
            <Pressable
              key={device.id}
              style={({ pressed }) => [styles.deviceCard, { backgroundColor: device.softAccent }, pressed && styles.pressed]}
              onPress={() => navigation.navigate('DeviceDetails', { device })}
            >
              <View style={[styles.iconCircle, { backgroundColor: '#FFFFFF' }]}>
                <Ionicons name={device.icon} size={30} color={device.accent} />
              </View>
              <Text style={styles.deviceName} numberOfLines={1}>{device.name}</Text>
              <Text style={styles.deviceRoom}>{device.room}</Text>
              <View style={[styles.statusPill, { backgroundColor: device.isOn ? '#2E9E68' : '#71829D' }]}>
                <Text style={styles.statusText}>{device.status}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.viewButton, pressed && styles.pressed]}
          onPress={() => navigation.navigate('Devices')}
        >
          <Ionicons name="list-outline" size={21} color="#FFFFFF" />
          <Text style={styles.viewButtonText}>VIEW ALL DEVICES</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
