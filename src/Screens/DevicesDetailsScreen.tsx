import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { RootStackParamList } from './StackNavigation';
import { styles } from '../Styles/DevicesDetailsStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceDetails'>;

export default function DeviceDetailsScreen({ navigation, route }: Props) {
  const { device } = route.params;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable accessibilityLabel="Go back" onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#20304A" />
          </Pressable>
          <Text style={styles.headerTitle}>Device details</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={[styles.heroCard, { backgroundColor: device.softAccent }]}>
          <View style={[styles.largeIconCircle, { backgroundColor: '#FFFFFF' }]}>
            <Ionicons name={device.icon} size={62} color={device.accent} />
          </View>
          <Text style={styles.deviceName}>{device.name}</Text>
          <Text style={styles.deviceRoom}>{device.room}  •  {device.category}</Text>
          <View style={[styles.statusPill, { backgroundColor: device.isOn ? '#2E9E68' : '#71829D' }]}>
            <Text style={styles.statusText}>{device.status}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About this device</Text>
        <Text style={styles.description}>{device.description}</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Ionicons name="flash-outline" size={21} color="#2E6BCE" />
            <Text style={styles.infoLabel}>Power usage</Text>
            <Text style={styles.infoValue}>{device.powerUsage}</Text>
          </View>
          <View style={styles.infoCard}>
            <Ionicons name="shield-checkmark-outline" size={21} color="#2E9E68" />
            <Text style={styles.infoLabel}>Connection</Text>
            <Text style={styles.infoValue}>Stable</Text>
          </View>
        </View>

        <Pressable style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={20} color="#FFFFFF" />
          <Text style={styles.actionText}>BACK TO DEVICES</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
