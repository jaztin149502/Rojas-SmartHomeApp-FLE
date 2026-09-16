export type Device = {
  id: string;
  name: string;
  room: string;
  category: string;
  icon: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
  accent: string;
  softAccent: string;
  status: string;
  isOn: boolean;
  description: string;
  powerUsage: string;
};

export const devices: Device[] = [
  {
    id: 'living-room-light',
    name: 'Living Room Light',
    room: 'Living Room',
    category: 'Lighting',
    icon: 'bulb-outline',
    accent: '#F0A51A',
    softAccent: '#FFF3D6',
    status: 'ON',
    isOn: true,
    description: 'A warm ceiling light for comfortable evenings and everyday living.',
    powerUsage: '12 W',
  },
  {
    id: 'bedroom-fan',
    name: 'Bedroom Fan',
    room: 'Bedroom',
    category: 'Climate',
    icon: 'sync-outline',
    accent: '#3186D8',
    softAccent: '#E2F1FF',
    status: 'OFF',
    isOn: false,
    description: 'Circulates cool air quietly while you rest or work from home.',
    powerUsage: '0 W',
  },
  {
    id: 'air-conditioner',
    name: 'Air Conditioner',
    room: 'Living Room',
    category: 'Climate',
    icon: 'snow-outline',
    accent: '#2B9AC8',
    softAccent: '#E0F7FC',
    status: 'OFF',
    isOn: false,
    description: 'Keeps the living room at a comfortable temperature on warm days.',
    powerUsage: '0 W',
  },
  {
    id: 'main-door',
    name: 'Main Door',
    room: 'Entrance',
    category: 'Security',
    icon: 'lock-closed-outline',
    accent: '#D24C68',
    softAccent: '#FFE6EC',
    status: 'LOCKED',
    isOn: false,
    description: 'Your front-door lock is secured and ready to protect your home.',
    powerUsage: '2 W',
  },
];
