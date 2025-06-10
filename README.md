# SafeSteps
**Independent Project | 2025 | Safety App**

SafeSteps is an AI-powered mobile safety companion designed to protect users on the move. Leveraging real-time location sharing, AI-based distress detection, emergency alerts, and community-driven support, SafeSteps empowers students, newcomers, and individuals walking alone to feel secure and connected.

---

## 🚀 Features

- **Real-Time Location Tracking**  
  Continuously streams user GPS coordinates to trusted contacts and emergency responders.

- **AI Distress Detection**  
  Analyzes movement patterns, voice cues, and accelerometer data via a custom CNN model to detect potential danger or falls.

- **Emergency Alerts & Escalation**  
  Triggers alerts to predefined contacts or dispatches local emergency services (via Twilio Programmable SMS/Voice API) when distress thresholds are exceeded.

- **Community Safety Network**  
  Enables nearby SafeSteps users to share safe paths, report hazards, and provide peer-to-peer support through a GeoFirestore-powered map.

- **End-to-End Encryption**  
  Secures data-in-transit and at-rest using TLS 1.3 and AES-256 encryption.

- **Customizable Safety Profiles**  
  Configure sensitivity levels, contact chains, and automated check-in intervals.

---

## 📐 Architecture Overview

```text
[ Mobile Client (Flutter) ]
        │
        ├── Location & Sensor Service
        ├── AI Inference Module (TensorFlow Lite)
        └── Notification Handler
               │
               ▼
[ Backend API (Node.js + Express) ]
        ├── Auth Service (JWT + OAuth2)
        ├── Real-Time Engine (Socket.IO)
        ├── Alert Processor
        └── Geospatial DB (Firestore + GeoFirestore)
               │
               ▼
[ Data Stores ]
  • User Profiles: Firestore  
  • Location Streams: Firestore Realtime  
  • Analytics & Logs: BigQuery  
  • Media Storage: AWS S3
