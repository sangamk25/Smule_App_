const config = require("./shared.conf");
const path = require("path");

config.port = 4724;
config.specs = ["../test/specs/android/**/*.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:deviceName": "Pixel 4",
    "appium:platformVersion": "11.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/smule-11-2-1.apk"),
    "appium:autoGrantPermissions": true,
  },
];
exports.config = config;
