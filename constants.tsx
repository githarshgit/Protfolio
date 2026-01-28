
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'FILE_01',
    title: 'AIR_QUALITY_STATION',
    client: 'ENVIRONMENTAL INTELLIGENCE',
    category: 'IOT / EMBEDDED',
    description: 'Portable multi-sensor monitoring station featuring a custom PCB-based 7-sensor array. Integrated Wi-Fi Access Point server for real-time JSON streaming and Flutter-based visualization.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Arduino Nano RP2040', 'Custom PCB', 'Flutter', '3D Printing'],
    status: 'RESTRICTED'
  },
  {
    id: 'FILE_02',
    title: 'FACIAL_RECOGNITION_AI',
    client: 'SECURITY PROTOCOLS',
    category: 'MACHINE LEARNING',
    description: 'AI-powered attendance system using DeepFace for real-time facial recognition via webcam. Features role-based authentication and interactive Plotly dashboards.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Flask', 'OpenCV', 'DeepFace', 'Firebase'],
    status: 'CLASSIFIED'
  },
  {
    id: 'FILE_03',
    title: 'HEALTH_WEARABLE',
    client: 'BIOMEDICAL SYSTEMS',
    category: 'WEARABLE TECH',
    description: 'Physiological data platform capturing ECG, EEG, and GSR. Developed MicroPython firmware for real-time sensor fusion and MQTT telemetry to a Flutter mobile interface.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1200',
    tags: ['MicroPython', 'MQTT', 'Arduino Nano', 'Custom PCB'],
    status: 'DECLASSIFIED'
  },
  {
    id: 'FILE_04',
    title: 'DRONE_FREQUENCY_HOPPING',
    client: 'RF COMMUNICATIONS',
    category: 'AEROSPACE LOGIC',
    description: 'Developed a bidirectional NRF24L01 communication system with dynamic frequency hopping (1-50 channels) to ensure robust data transmission in contested RF environments.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Raspberry Pi', 'CircuitPython', 'NRF24L01', 'GPS'],
    status: 'RESTRICTED'
  },
  {
    id: 'FILE_05',
    title: 'GARDENING_COMPANION',
    client: 'BOTANICAL AUTOMATION',
    category: 'IOT / AI',
    description: 'ESP32-based IoT system with Python ML crop recommendation engine. Integrates WeatherAPI and OpenStreetMap for intelligent irrigation and environmental tracking.',
    image: 'https://images.unsplash.com/photo-1585336261022-69c667abe16a?auto=format&fit=crop&q=80&w=1200',
    tags: ['ESP32', 'Python ML', 'Flutter', 'Railway'],
    status: 'DECLASSIFIED'
  }
];

export const TECHNICAL_SKILLS = {
  languages: ['Python', 'Dart', 'C', 'C++', 'SQL'],
  frameworks: ['TensorFlow', 'NumPy', 'Flask', 'FastAPI', 'Flutter'],
  tools: ['Linux', 'Git', 'Arduino IDE', 'Firebase', 'AWS IoT', 'VS Code'],
  competencies: ['Data Structures', 'Machine Learning', 'IoT Systems', 'PCB Design']
};
