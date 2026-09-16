import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { devices } from './deviceData';
import type { RootStackParamList } from './StackNavigation';
import { styles } from '../Styles/DevicesStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Devices'>;

export default function DevicesScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Pressable accessibilityLabel="Go back" onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </Pressable>
          <View>
            <Text style={styles.eyebrow}>SMART HOME</Text>
            <Text style={styles.title}>My devices</Text>
          </View>
          <View style={styles.topBarIcon}>
            <Ionicons name="options-outline" size={21} color="#FFFFFF" />
          </View>
        </View>

        <View style={styles.summaryRow}>
          <View>
            <Text style={styles.summaryTitle}>All devices</Text>
            <Text style={styles.summaryText}>Tap a device to view its details.</Text>
          </View>
          <View style={styles.summaryBadge}>
            <Text style={styles.summaryBadgeText}>{devices.length}</Text>
          </View>
        </View>

        <View style={styles.list}>
          {devices.map((device) => (
            <Pressable
              key={device.id}
              style={({ pressed }) => [styles.deviceRow, pressed && styles.pressed]}
              onPress={() => navigation.navigate('DeviceDetails', { device })}
            >
              <View style={[styles.iconCircle, { backgroundColor: device.softAccent }]}>
                <Ionicons name={device.icon} size={29} color={device.accent} />
              </View>
              <View style={styles.deviceCopy}>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.deviceMeta}>{device.room}  •  {device.category}</Text>
                <View style={styles.statusLine}>
                  <View style={[styles.statusDot, { backgroundColor: device.isOn ? '#2E9E68' : '#71829D' }]} />
                  <Text style={styles.statusText}>{device.status}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={21} color="#8A98AE" />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
