# NOCH Alpha — System Administrator Deployment Guide

This guide is for system administrators responsible for building, deploying, and operating the NOCH platform.

---

## Deployment Responsibilities

- Manage environment configuration and secrets
- Run CI quality gates and release checks
- Build and distribute Android and iOS artifacts
- Publish and maintain documentation
- Operate issue triage and rollback workflows

## Prerequisites

| Tool | Version |
|------|---------|
| Flutter SDK | 3.27.x |
| Java | 17+ |
| Android SDK | Latest stable |
| Xcode | Latest (macOS only, for iOS) |
| Firebase CLI | Latest |
| Git | 2.x+ |
| Node.js | 18+ (for website) |

You will also need:
- Firebase project access (console and CLI)
- GitHub admin access for Actions and Pages

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
3. **Build App Bundle (for Play Store):**
   ```bash
   flutter build appbundle --release
   ```
4. Upload artifacts to the release channel and update release notes.

### iOS

1. Open `ios/Runner.xcworkspace` in Xcode.
2. Configure signing and provisioning profiles.
3. Archive and distribute via TestFlight or internal channel.

### Web

```bash
flutter build web --release
```

Deploy the contents of `build/web/` to your hosting provider.

---

## Documentation Site

The marketing/documentation website lives in the `website/` directory.

1. **Install dependencies:**
   ```bash
   cd website
   npm install
   ```

2. **Local development:**
   ```bash
   npm run dev
   ```

3. **Production build:**
   ```bash
   npm run build
   ```

4. The GitHub Actions workflow at `.github/workflows/deploy-pages.yml` handles automatic deployment to GitHub Pages.

5. **Published URL:** `https://cpsecapstone.github.io/noch/`

---

## Rollback & Incident Response

- Revert to last known-good artifact or Git tag
- Redeploy previous documentation commit if needed
- Communicate impact to testers immediately
- Open a post-mortem issue with prevention actions