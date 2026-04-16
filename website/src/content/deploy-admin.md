# NOCH Alpha — System Administrator Deployment Guide

This guide is for system administrators responsible for building, deploying, and operating the NOCH platform.

---

## Deployment Responsibilities

- Manage environment configuration and secrets
- Run CI quality gates and release checks
- Build and distribute Android and iOS artifacts
- Publish and maintain documentation

## Prerequisites

| Tool | Version |
|------|---------|
| Flutter SDK | 3.27.x |
| Java | 17+ |
| Android SDK | Latest stable |
| Android Emulator | |

---

## Environment Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CPSECapstone/noch.git
   cd noch
   ```

2. **Install Flutter dependencies:**
   ```bash
   flutter pub get
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in API keys, Firebase config, and backend URLs

4. **Validate toolchain:**
   ```bash
   flutter doctor
   ```

> ⚠️ **Never commit production credentials or private keys to the repository.**

## Pre-Release Quality Gates

Before any release, ensure the following pass:

```bash
flutter analyze --no-fatal-warnings --no-fatal-infos
flutter test
```

Verify the CI workflow (`.github/workflows/ci.yaml`) passes on the target commit.

---

## Build & Distribution

### Android

1. **Configure signing keys** in `android/key.properties`
2. **Build APK:**
   ```bash
   flutter build apk --release
   ```
3. Upload artifacts to the release channel and update release notes.
