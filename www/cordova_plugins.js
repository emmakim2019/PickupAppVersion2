cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "Chcp.chcp",
    "file": "plugins/Chcp/www/chcp.js",
    "pluginId": "Chcp",
    "clobbers": [
      "chcp"
    ]
  },
  {
    "id": "SplashScreen.SplashScreen",
    "file": "plugins/SplashScreen/www/splashscreen.js",
    "pluginId": "SplashScreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "Push.PushNotification",
    "file": "plugins/Push/www/push.js",
    "pluginId": "Push",
    "clobbers": [
      "PushNotification"
    ]
  },
  {
    "id": "WebView.webview",
    "file": "plugins/WebView/www/webViewPlugin.js",
    "pluginId": "WebView",
    "clobbers": [
      "window.webview"
    ]
  },
  {
    "id": "Promises.Promise",
    "file": "plugins/Promises/www/promise.js",
    "pluginId": "Promises",
    "runs": true
  },
  {
    "id": "AdmobPro.AdMob",
    "file": "plugins/AdmobPro/www/AdMob.js",
    "pluginId": "AdmobPro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "AppVersion.AppVersionPlugin",
    "file": "plugins/AppVersion/www/AppVersionPlugin.js",
    "pluginId": "AppVersion",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "BarcodeScanner.BarcodeScanner",
    "file": "plugins/BarcodeScanner/www/barcodescanner.js",
    "pluginId": "BarcodeScanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "Camera.Camera",
    "file": "plugins/Camera/www/CameraConstants.js",
    "pluginId": "Camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "Camera.CameraPopoverOptions",
    "file": "plugins/Camera/www/CameraPopoverOptions.js",
    "pluginId": "Camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "Camera.camera",
    "file": "plugins/Camera/www/Camera.js",
    "pluginId": "Camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "Camera.CameraPopoverHandle",
    "file": "plugins/Camera/www/ios/CameraPopoverHandle.js",
    "pluginId": "Camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "Clipboard.Clipboard",
    "file": "plugins/Clipboard/www/clipboard.js",
    "pluginId": "Clipboard",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  },
  {
    "id": "Device.device",
    "file": "plugins/Device/www/device.js",
    "pluginId": "Device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "File.DirectoryEntry",
    "file": "plugins/File/www/DirectoryEntry.js",
    "pluginId": "File",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "File.DirectoryReader",
    "file": "plugins/File/www/DirectoryReader.js",
    "pluginId": "File",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "File.Entry",
    "file": "plugins/File/www/Entry.js",
    "pluginId": "File",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "File.File",
    "file": "plugins/File/www/File.js",
    "pluginId": "File",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "File.FileEntry",
    "file": "plugins/File/www/FileEntry.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "File.FileError",
    "file": "plugins/File/www/FileError.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "File.FileReader",
    "file": "plugins/File/www/FileReader.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "File.FileSystem",
    "file": "plugins/File/www/FileSystem.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "File.FileUploadOptions",
    "file": "plugins/File/www/FileUploadOptions.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "File.FileUploadResult",
    "file": "plugins/File/www/FileUploadResult.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "File.FileWriter",
    "file": "plugins/File/www/FileWriter.js",
    "pluginId": "File",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "File.Flags",
    "file": "plugins/File/www/Flags.js",
    "pluginId": "File",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "File.LocalFileSystem",
    "file": "plugins/File/www/LocalFileSystem.js",
    "pluginId": "File",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "File.Metadata",
    "file": "plugins/File/www/Metadata.js",
    "pluginId": "File",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "File.ProgressEvent",
    "file": "plugins/File/www/ProgressEvent.js",
    "pluginId": "File",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "File.fileSystems",
    "file": "plugins/File/www/fileSystems.js",
    "pluginId": "File"
  },
  {
    "id": "File.requestFileSystem",
    "file": "plugins/File/www/requestFileSystem.js",
    "pluginId": "File",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "File.resolveLocalFileSystemURI",
    "file": "plugins/File/www/resolveLocalFileSystemURI.js",
    "pluginId": "File",
    "merges": [
      "window"
    ]
  },
  {
    "id": "File.isChrome",
    "file": "plugins/File/www/browser/isChrome.js",
    "pluginId": "File",
    "runs": true
  },
  {
    "id": "File.iosFileSystem",
    "file": "plugins/File/www/ios/FileSystem.js",
    "pluginId": "File",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "File.fileSystems-roots",
    "file": "plugins/File/www/fileSystems-roots.js",
    "pluginId": "File",
    "runs": true
  },
  {
    "id": "File.fileSystemPaths",
    "file": "plugins/File/www/fileSystemPaths.js",
    "pluginId": "File",
    "merges": [
      "cordova"
    ],
    "runs": true
  },
  {
    "id": "Geolocation.Coordinates",
    "file": "plugins/Geolocation/www/Coordinates.js",
    "pluginId": "Geolocation",
    "clobbers": [
      "Coordinates"
    ]
  },
  {
    "id": "Geolocation.PositionError",
    "file": "plugins/Geolocation/www/PositionError.js",
    "pluginId": "Geolocation",
    "clobbers": [
      "PositionError"
    ]
  },
  {
    "id": "Geolocation.Position",
    "file": "plugins/Geolocation/www/Position.js",
    "pluginId": "Geolocation",
    "clobbers": [
      "Position"
    ]
  },
  {
    "id": "Geolocation.geolocation",
    "file": "plugins/Geolocation/www/geolocation.js",
    "pluginId": "Geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "InAppBrowser.inappbrowser",
    "file": "plugins/InAppBrowser/www/inappbrowser.js",
    "pluginId": "InAppBrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "Keyboard.keyboard",
    "file": "plugins/Keyboard/www/ios/keyboard.js",
    "pluginId": "Keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ]
  },
  {
    "id": "SocialSharing.SocialSharing",
    "file": "plugins/SocialSharing/www/SocialSharing.js",
    "pluginId": "SocialSharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "StatusBar.statusbar",
    "file": "plugins/StatusBar/www/statusbar.js",
    "pluginId": "StatusBar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "LocalNotification.LocalNotification",
    "file": "plugins/LocalNotification/www/local-notification.js",
    "pluginId": "LocalNotification",
    "clobbers": [
      "cordova.plugins.notification.local",
      "plugin.notification.local"
    ]
  },
  {
    "id": "LocalNotification.LocalNotification.Core",
    "file": "plugins/LocalNotification/www/local-notification-core.js",
    "pluginId": "LocalNotification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "LocalNotification.LocalNotification.Util",
    "file": "plugins/LocalNotification/www/local-notification-util.js",
    "pluginId": "LocalNotification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "OfflineMode.OfflineMode",
    "file": "plugins/OfflineMode/www/OfflineMode.js",
    "pluginId": "OfflineMode",
    "clobbers": [
      "window.OfflineMode"
    ]
  },
  {
    "id": "Insomnia.Insomnia",
    "file": "plugins/Insomnia/www/Insomnia.js",
    "pluginId": "Insomnia",
    "clobbers": [
      "window.plugins.insomnia"
    ]
  },
  {
    "id": "MusicControls.MusicControls",
    "file": "plugins/MusicControls/www/MusicControls.js",
    "pluginId": "MusicControls",
    "clobbers": [
      "MusicControls"
    ]
  },
  {
    "id": "Navigator.Navigator",
    "file": "plugins/Navigator/www/navigator.js",
    "pluginId": "Navigator",
    "clobbers": [
      "Navigator"
    ]
  },
  {
    "id": "Permissions.Permissions",
    "file": "plugins/Permissions/www/permissions-dummy.js",
    "pluginId": "Permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "Chcp": "1.5.2",
  "SplashScreen": "5.0.2",
  "Push": "1.10.0",
  "WebView": "1.0.0",
  "Promises": "4.2.2",
  "AdmobPro": "2.30.1",
  "AppVersion": "0.1.8",
  "AppEvent": "1.2.0",
  "BarcodeScanner": "7.1.2",
  "Camera": "4.0.3",
  "Clipboard": "0.1.0",
  "Device": "2.0.2",
  "File": "6.0.1",
  "Geolocation": "4.0.1",
  "InAppBrowser": "3.0.0",
  "Keyboard": "2.2.1",
  "SocialSharing": "5.4.0",
  "StatusBar": "2.4.1",
  "LocalNotification": "0.8.4.1",
  "OfflineMode": "1.0.0",
  "Insomnia": "4.3.0",
  "MusicControls": "2.1.4",
  "Navigator": "0.1.0",
  "Permissions": "1.0.0",
  "Siberian": "1.0.0"
};
// BOTTOM OF METADATA
});