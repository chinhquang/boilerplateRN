## Simple React Native boilerplate


This project is a React Native boilerplate that can be used to kickstart a mobile application.

## Content

The boilerplate contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.61.5**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- a [Vector icons libraries](https://github.com/oblador/react-native-vector-icons) to support an amount of diverse icons to your applications.
- [React Navigation](https://reactnavigation.org/) (v3.11.2) with a [`NavigationService`](App/Services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default.

## Directory layout

- [`src/Container`](src/Container): container components, i.e. the application's screens
- [`src/Assets`](src/Assets): assets (image, audio files, .
- [`src/Services`](src/Services): application services, e.g. API clients
- [`src/Context`](src/Context): redux [Context Hook](https://reactjs.org/docs/context.html)
- [`src/Theme`](src/Theme): includes color themes and localized string for multiple languages.

For more information on each directory, click the link and read the directory's README.

## Updates

The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)


## Using the boilerplate

To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: `rm -rf .git/`
- rename the React Native project to your own project name: `npx react-native-rename -- <YourProjectName>` (the default name is `BoilerPlate`)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `npm install` to install the dependencies.
  
- run the following steps for your platform

### Android

- `npm react-native run-android` to start the metro bundler, in a dedicated terminal
- Hit RUN button in Android studio to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `npm react-native run-ios` to start the metro bundler, in a dedicated terminal and run the iOS application (remember to start a simulator or connect an iPhone phone). Or you can start the project by click RUN button in XCode

## Useful documentation


### Package dependencies

- You may want to use [CocoaPods](https://cocoapods.org/) to manage your dependencies (iOS only) 
  - [Using CocoaPods to manage your package dependencies](docs/setup%20cocoapods.md)
  
  
## Troubleshooting

### App fails to start after renaming

If you are facing the the problem after renaming with iOS, clear build file and `pod install` again.






