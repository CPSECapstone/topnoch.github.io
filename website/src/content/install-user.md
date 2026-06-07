## NOCH (Alpha) Installation & Usage Guide

Here is how to install the app for beta testing.

---

## Platforms

| Platform | Status | Method |
|----------|--------|--------|
| Android Native | ✅ Recommended | APK |
| Android Emulator | ✅ Available | APK |
| IOS testflight | ❌ Unavailable |  |

## Installation: Android Emulator 

1. If you don't already have it. Download Android Studio for an android emulator. [Android Studio](https://developer.android.com/studio)
2. Start an instance of the emulator. Follow sub-steps to create an instance to start.
   - Start android studio.
   - go to ```More Actions``` -> ```Virtual Device Manager```.
   - Click the plus near the top left to create a virtual device.
   - Any android phone should work. I have developed on ```medium phone``` with API 36. 
   - Go through ```next``` -> ```finish```.
   - Now click the start button on the device you created.
3. Go to [NOCH Releases](https://github.com/CPSECapstone/noch/releases) to download the latest build and unzip the file.
4. To download the APK you can drag and drop the unzipped file into the running device emulator.
5. In order for the emulator's microphone to work. tap on the three dots (settings) at the bottom side of the emulator. Go to ```Microphone``` and turn on ```Virtual microphone uses host audio input```. 

## Installation: Android Native.

1. Download the APK onto the android phone. Either through USB or directly from the github [NOCH Releases](https://github.com/CPSECapstone/noch/releases).
2. to to ```Settings``` -> ```Security & Privacy``` -> ```More Security Settings``` -> ```Install Unknown Apps``` in order to allow the APK to install.
3. Within your downloads click on the APK and install it.

## User-Guides: Logging In and Setup

- To login enter the phone number ```000-000-0000``` and then enter the security code ```000000``` in order to login.
- To re-experience the onboarding and login flow. Within the phone's settings, go to the app details and delete app data.
- To find the app version. Use the build number on the APK that is downloaded and installed.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| App does not launch | Reinstall the latest build |
| Login fails | Verify your account exists in the active backend environment |
| Data appears missing | Check internet connectivity and retry |
| Permissions issues | Go to device Settings → Apps → NOCH → Permissions |

--- 