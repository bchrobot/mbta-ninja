// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'ninja.mbta',
  name: 'MBTA Ninja',
  description: 'No more guessing what "minor delays" means.',
  author: 'Code for Boston',
  email: 'hello@codeforboston.org',
  website: 'http://www.codeforboston.com/'
});

// Set up resources such as icons and launch screens.
App.icons({
   // Android
  'android_ldpi': 'public/android-chrome-36x36.png',
  'android_mdpi': 'public/android-chrome-48x48.png',
  'android_hdpi': 'public/android-chrome-72x72.png',
  'android_xhdpi': 'public/android-chrome-96x96.png',

   // iOS
  'iphone': 'public/apple-touch-icon-60x60.png',
  'iphone_2x': 'public/apple-touch-icon-120x120.png',
  'ipad': 'public/apple-touch-icon-57x57.png',
  'ipad_2x': 'public/apple-touch-icon-114x114.png',
});


// App.launchScreens({
//   // iOS
//   'iphone': 'resources/splash/splash-320x480.png',
//   'iphone_2x': 'resources/splash/splash-320x480@2x.png',
//   'iphone5': 'resources/splash/splash-320x568@2x.png',
//   'ipad_portrait': 'resources/splash/splash-768x1024.png',
//   'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
//   'ipad_landscape': 'resources/splash/splash-1024x768.png',
//   'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

//   // Android
//   'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
//   'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
//   'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
//   'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
//   'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
//   'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
//   'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
//   'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
// });

// http://docs.meteor.com/#/full/mobileconfigjs