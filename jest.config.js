module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
      + "|react-navigation-tabs"
      + "|react-native-splash-screen"
      + "|react-native-screens"
      + "|react-native-reanimated"
    + ")/)",
  ],
  setupFiles: [
    "./client/js/setupTests.js"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
}