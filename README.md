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

Update your bashrc:
```
export ANDROID_HOME=<YOUR_PATH>/adt-bundle-linux-x86_64-20140321/sdk
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH
```

- Install the Android platform to the project:
```
cordova platform add android
```

- Launch Ripple Emulator

```
ripple emulate
```

- Launch Native Android emulator:

Install Ant, `ant` command should be available. On Ubuntu: `sudo apt-get install ant`

Install AVD's with the `android` command (GUI)

Launch them with `cordova emulate android` 


# TODO

- Use watchify to make the build faster
- Fail safe on Recess error
- Perhaps add some default phonegap plugins or config (I'm not an expert)
