gulp-browserify-react-phonegap-starter
================

Inspired by the structure of [Gulp-starter](https://github.com/greypants/gulp-starter)

This app uses at runtime: 

- React 
- Underscore 
- JQuery


At build time:

- Compiles React's JSX files
- Process images (compress)
- Process CSS with Recess and Less
- Assemble JS file with Browserify

This creates a simple Gulp config that will build a simple app using Browserify and 2 React components. Here's a picture of it using Ripple emulator:

![Picture](http://sebastien.lorber.free.fr/phonegap-react.png)

Only the very minimal files required are added to Git. The Cordova `www` folder for exemples is ignored and is only the result of a local build. During development, you only modify files in the `src` folder.

Using a [Browserify trick](https://github.com/greypants/gulp-starter/issues/17), you can also express all your `require` calls with paths relative to the `src` folder. This means you don't have anymore to write `require("../../../../../js/components/relativePathHellComponent")` but you can simply write `require("js/components/relativePathHellComponent")` from any source file.


# Versions

- Cordova: `3.4.1-0.1.0`
- Gulp: `3.6.2`
- Phonegap: `3.5.0-0.20.4`
- Ripple: `0.9.22`

(Yes Cordova and Phonegap versions are not the same, I just show you versions that work on my computer but you should be able to use latest versions as well)

# Install the tools

- Install NPM, `npm` command should be available `sudo apt-get install npm`

- Install required NPM dependencies:
```
npm install -g gulp@3.6.2
npm install -g cordova@3.4.1-0.1.0
npm install -g phonegap@3.5.0-0.20.4
npm install -g ripple-emulator@0.9.22
```

- Install local NPM dependencies: `npm install`

- Install Android SDK, `android` command should be available:
Download android SDK: `http://developer.android.com/sdk/index.html?hl=sk`
Note that the phonegap versions above work fine with SDK 19 but it seems to have problems with version 20.

Update your bashrc:
```
export ANDROID_HOME=<YOUR_PATH>/adt-bundle-linux-x86_64-20140321/sdk
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH
```

- Install the Android platform to the project:
```
cordova platform add android
```
If you have troubles doing so, it may be because you did not install the Android SDK (19) or Git did not create the `platforms`, `.cordova` or `plugins` folder.
Also, you should run `gulp` at least once or create the phonegap `www` folder manually.


- If you want to use iOS: I can't help you, I don't have OSX but I guess installing the iOS SDK + `cordova platform add ios` should be fine.


# START

- Build the project

```
gulp
```

This will create the appropriate Phonegap content in `www` based on your source files.

- Launch Ripple Emulator

```
ripple emulate
```

Notice that if you want to do Ajax requests with Chrome, you have to [disable the CORS securities in chrome](http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome) and also disable the Cross Domain Proxy on Ripple settings.


- Launch Native Android emulator (if you don't like Ripple):

Install Ant, `ant` command should be available. On Ubuntu: `sudo apt-get install ant`

Install AVD's with the `android` command (GUI)

Launch them with `cordova emulate android` 

# FAQ

- My Ajax requests never work in Ripple!

Notice that if you want to do Ajax requests with Chrome in Ripple, you have to [disable the CORS securities in chrome](http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome) and also disable the Cross Domain Proxy on Ripple settings.

- I started Ripple and it says `Cannot GET /`

This happens because you didn't use the `cordova platform add android` command. Ripple needs the `platform` folder to be populated with some content, which is what this command do.

- I installed iOS SDK and tried to launch Ripple but get an error `Error: static() root path required` in the console

This is probably because Ripple is launched by default with an Android device selected. 
You can't use an Android device in Ripple unless you install the Android platform. But you can select an iOS device in Ripple and it should work this time.


# More infos

Some useful links to read:

- [Ripple is reborn](http://www.raymondcamden.com/index.cfm/2013/11/5/Ripple-is-Reborn)

# TODO

- Use watchify to make the build faster
- Fail safe on Recess error
- Perhaps add some default phonegap plugins or config (I'm not an expert)
