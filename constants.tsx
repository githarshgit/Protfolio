
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'PORTABLE AIR MONITORING STATION',
    client: 'IoT Project',
    category: 'IOT / EMBEDDED',
    description: 'A field-deployable environmental sensing device built around a custom PCB housing 7 sensors to measure particulate matter, toxic gases, noise, and climate conditions. Streams live JSON data over Wi-Fi, logs offline to SD card, and pairs with a Flutter app featuring real-time AQI dashboards and pollutant trend visualization — all housed in a purpose-designed 3D-printed enclosure.',
    images: [
      '/projects/AQMS/AQMS1.jpg',
      '/projects/AQMS/AQMS2.jpg',
      '/projects/AQMS/AQMS3.jpg',
      '/projects/AQMS/Screenshot_1.png',
      '/projects/AQMS/Screenshot_2.png',
      '/projects/AQMS/Screenshot_3.png'
    ],
    tags: ['Arduino Nano RP2040', 'Custom PCB', 'Flutter', '3D Printing'],
    githubUrl: 'https://github.com/githarshgit/air360.git',
    status: 'COMPLETED'
  },
  {
    id: '02',
    title: 'WEARABLE HEALTH MONITORING SYSTEM',
    client: 'Wearable Tech',
    category: 'WEARABLE TECH',
    description: 'A custom-built wearable that captures ECG, EEG, GSR, and body temperature through a bespoke PCB and Arduino Nano RP2040. MicroPython firmware handles real-time sensor fusion and MQTT cloud telemetry, while a companion Flutter app renders live physiological waveforms and heart rate variability analysis in a 3D-printed ergonomic form factor.',
    images: [
      '/projects/hms/20250907_200928.jpg',
      '/projects/hms/20250907_201541.jpg',
      '/projects/hms/20250907_205432.jpg',
      '/projects/hms/20250907_205517.jpg',
      '/projects/hms/20250907_205635.jpg'
    ],
    tags: ['MicroPython', 'MQTT', 'Arduino Nano', 'Custom PCB'],
    githubUrl: 'git@github.com:githarshgit/hms360.git',
    status: 'COMPLETED'
  },
  {
    id: '03',
    title: 'AI ATTENDANCE SYSTEM',
    client: 'AI/ML Project',
    category: 'MACHINE LEARNING',
    description: 'An intelligent web-based platform that automates attendance tracking using real-time facial recognition. Built with Flask and DeepFace, it supports role-based access for admins, lecturers, and students, while delivering rich analytics dashboards with interactive charts for attendance trends, gender distributions, and enrollment insights.',
    images: [
      '/projects/facial-recognition/1.jpg',
      '/projects/facial-recognition/2.jpg'
    ],
    tags: ['Flask', 'OpenCV', 'DeepFace', 'Firebase'],
    githubUrl: 'https://github.com/githarshgit/AI-Attendance',
    status: 'COMPLETED'
  },
  {


    id: '04',
    title: 'DRONE FREQUENCY HOPPING',
    client: 'RF Communications',
    category: 'AEROSPACE LOGIC',
    description: 'A robust anti-jamming telemetry system for drones using bidirectional NRF24L01 radio modules across Raspberry Pi nodes. Features GPIO-triggered dynamic frequency hopping across 50 channels with sub-millisecond latency, and parses live NMEA GPS data for precise real-time coordinate transmission in contested RF environments.',
    images: [
      'https://raw.githubusercontent.com/githarshgit/Drone-Frequency-Hopping/main/img/rx.jpg',
      'https://raw.githubusercontent.com/githarshgit/Drone-Frequency-Hopping/main/img/tx.jpg'
    ],
    tags: ['Raspberry Pi', 'CircuitPython', 'NRF24L01', 'GPS'],
    githubUrl: 'https://github.com/githarshgit/Drone-Telemetry',
    status: 'COMPLETED'
  },
  {
    id: '05',
    title: 'SMART GARDEN COMPANION',
    client: 'IoT / AI',
    category: 'IOT / AI',
    description: 'An AI-powered plant health platform combining ESP32 IoT hardware with soil moisture, humidity, and NPK sensors for weather-aware smart irrigation. Integrates a Python ML crop recommendation engine, OpenStreetMap geolocation, a Railway-hosted REST backend, and a Flutter app with live sensor dashboards and an LLM-powered gardening chatbot.',
    images: [
      '/projects/gardening/1.jpg',
      '/projects/gardening/2.jpg'
    ],
    tags: ['ESP32', 'Python ML', 'Flutter', 'Railway'],
    githubUrl: 'https://github.com/githarshgit/Smart-Garden',
    status: 'COMPLETED'
  }
];

export const TECHNICAL_SKILLS = {
  languages: ['Python', 'Dart', 'C', 'C++', 'SQL'],
  frameworks: ['TensorFlow', 'NumPy', 'Flask', 'FastAPI', 'Flutter'],
  tools: ['Linux', 'Git', 'Arduino IDE', 'Firebase', 'AWS IoT', 'VS Code'],
  competencies: ['Data Structures', 'Machine Learning', 'IoT Systems', 'PCB Design']
};
