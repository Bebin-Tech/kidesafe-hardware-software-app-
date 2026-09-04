# Kidsafe - Smart Child Safety & Health Monitoring

Kidsafe is a professional parent-side Android application designed for real-time monitoring of a child's smart safety wearable.

## Core Features

- **Home Dashboard**: Immediate visibility into your child's safety, location, and health.
- **Real-Time Health**: Monitor body temperature with history graphs and automated high-temperature alerts.
- **GPS Tracking**: View current coordinates and safe-zone status.
- **SOS Emergency**: Highly visible emergency button with confirmation and location broadcasting.
- **Alert History**: Centralized log for security, battery, and health notifications.
- **Profile Management**: Manage child information and safe-zone configurations.

## Simulation Engine

The current version includes a built-in simulation engine that demonstrates:
- Fluctuating temperature (36.5°C - 37.5°C)
- Gradually decreasing battery
- SOS event triggers
- Safe-zone boundary checks

## Tech Stack
- **UI**: Jetpack Compose (Material 3)
- **Language**: Kotlin
- **Architecture**: Modern Android (ViewModel, State management)

## Developer Controls
Navigate to the **Profile** screen to trigger manual simulations for:
- High Temperature Alert
- Low Battery Notification
- Manual SOS Simulation
