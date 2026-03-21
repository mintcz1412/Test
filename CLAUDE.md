# CLAUDE.md

## Project Overview

React Native cross-platform mobile application (v0.0.1) that detects number sequences (Arithmetic, Geometric, Fibonacci) and includes a map-based location search feature.

- **Language**: JavaScript (JSX)
- **Framework**: React Native 0.61.5 / React 16.9.0
- **Platforms**: Android (API 16+), iOS (9.0+)

## Directory Structure

```
├── App.js                    # Root navigation setup (SwitchNavigator + TabNavigator)
├── index.js                  # App entry point (registers 'Test')
├── __tests__/                # Jest test files
│   └── App-test.js
├── res/
│   ├── assets/               # Images (e.g. currentLocation.png)
│   ├── components/           # Reusable components
│   │   └── header.js         # Custom styled header
│   └── screens/              # Screen components
│       ├── WelcomeScreen.js  # Splash screen with animated loader
│       ├── HomeScreen.js     # Number sequence analyzer (main feature)
│       ├── SearchScreen.js   # Map + Google Places autocomplete
│       └── DetailsScreen.js  # Placeholder screen
├── android/                  # Android native project (Gradle)
├── ios/                      # iOS native project (Xcode/CocoaPods)
├── package.json              # Dependencies and scripts
├── babel.config.js           # Babel configuration
└── metro.config.js           # Metro bundler configuration
```

## Component Hierarchy

```
AppContainer (App.js)
  └─ SwitchNavigator
     ├─ WelcomeScreen
     └─ BottomTabNavigator
        ├─ HomeStack
        │  ├─ HomeScreen
        │  └─ SearchScreen
        └─ SearchStack
           ├─ SearchScreen
           └─ DetailsScreen
```

## Common Commands

```bash
npm start             # Start Metro bundler
npm run android       # Build and run on Android
npm run ios           # Build and run on iOS
npm test              # Run Jest tests
npm run lint          # Run ESLint
```

## Key Dependencies

- **Navigation**: react-navigation v4 (switch, stack, tabs)
- **Maps**: react-native-maps, react-native-google-places-autocomplete
- **State**: Redux, react-redux
- **UI**: react-native-elements, react-native-vector-icons (FontAwesome)
- **Animations**: react-native-reanimated

## Code Conventions

- **Components**: Class-based (React.Component), PascalCase filenames for screens
- **Styling**: React Native StyleSheet API (inline style objects)
- **State**: Component-level state; Redux wired but used minimally
- **Navigation**: react-navigation v4 patterns (createStackNavigator, createBottomTabNavigator, createSwitchNavigator)

## Linting & Formatting

- **ESLint**: `@react-native-community` preset (`.eslintrc.js`)
- **Prettier**: Single quotes, no bracket spacing, trailing commas (`all`) (`.prettierrc.js`)
- **Flow**: Configured (v0.105.0) with strict mode checks (`.flowconfig`)

## Testing

- **Framework**: Jest with `react-native` preset
- **Test location**: `__tests__/` directory
- **Current tests**: Snapshot test for App component
- Run with `npm test`

## Architecture Notes

- **HomeScreen** contains the core sequence detection logic:
  - `hasSeriesRelation()` — checks if array follows a pattern
  - `isArithmeticAtIndex()` — detects constant-difference sequences
  - `isGeometricAtIndex()` — detects constant-ratio sequences
  - `isFibonacciAtIndex()` — detects sum-of-previous-two sequences
  - `onCoinMoreDetailSelected()` — triggers calculation and generates next 5 terms
- **SearchScreen** uses Google Maps API for location search with autocomplete
- **WelcomeScreen** shows a 2-3 second animated splash before navigating to the main app

## Build Configuration

- **Android**: compileSdkVersion 28, minSdkVersion 16, Gradle 3.4.2
- **iOS**: Targets iOS 9.0+, uses CocoaPods (`ios/Podfile`)
- **Bundler**: Metro (default React Native config)
