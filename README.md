stample-Phonegap
================

# Versions

- Cordova: `3.4.1-0.1.0`
- Gulp: `3.6.2`
- Phonegap: `3.5.0-0.20.4`
- Ripple: `0.9.22`

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

- Launch Native android emulator:

Install AVD's with the `android` command (GUI) 
Launch them with `cordova emulate android` 


--------------------------------------------------------------------------

--------------------------------------------------------------------------


# OLD !!!
--------------------------------------------------------------------------


# Infos

- It seems you can't run or build the iOS emulators without a Mac with OSX

# Install the tools

-  Download android SDK
```
http://developer.android.com/sdk/index.html?hl=sk
```


- Configure PATH for SDK, `android` command should be available:
```
export ANDROID_HOME=$DEVHOME_INSTALL/adt-bundle-linux-x86_64-20140321/sdk
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH
```


- Install Ant, `ant` command should be available
On Ubuntu:
``` 
sudo apt-get install ant
```


- Install NPM, `npm` command should be available
```
sudo apt-get install npm
```

- Install NPM packages configured in this project's `package.json`:
```
npm install
```

- Install plugins:

```
TODO
```

- Install phonegap platforms:

```
phonegap install android
```

# Run the app

### Live test on your mobile with Phonegap App Developer

#### /!\ This may not work when using non official plugins

- Install `Phonegap App Developer` app on your phone for live testing

- Use the `cordova serve` command

This will spawn a http hosting server that will serve resources to the mobile app
/!\ This is not obvious but this hosting is not really intended to be used for browser testing or Ripple browser emulator
```
sebastien@sebastien-xps:stample-Phonegap (stample-phonegap-v2 +%)$ cordova serve
Static file server running on port 8000 (i.e. http://localhost:8000)
CTRL + C to shut down

# We can see resources accesses done by the mobile version once connected
302 /android/
200 /android/www/
200 /android/www/js/index.js
200 /android/www/css/index.css
200 /android/www/cordova.js
200 /android/www/img/logo.png
200 /android/www/cordova.js
200 /android/www/cordova_plugins.js
302 /android/
200 /android/www/
200 /android/www/cordova.js
200 /android/www/js/index.js
200 /android/www/css/index.css
200 /android/www/img/logo.png
200 /android/www/cordova.js
200 /android/www/cordova_plugins.js
```

#### Case 1: mobile can access server with an ip address

This is the case if:
- The server ip address is reachable from the internet
- The mobile and server are connected to the same private network (ie connected to the same Wifi) and the mobile can reach the server with the network local ip address

Then you can just launch `Phonegap App Developer` on your phone and add the reachable ip address (like `10.196.16.154:8000`)


#### Case 2: mobile CANT access server with an ip address

This is the case if:
- The server ip address is not reachable from the internet
- The mobile is connected to another network (like 3g) and can't reach the server ip address in any way

- Install ngrok from `https://ngrok.com/`

- Run `ngrok 8000`

```
ngrok                                                                                                                                                                         (Ctrl+C to quit)
                                                                                                                                                                                              
Tunnel Status                 online                                                                                                                                                          
Version                       1.6/1.6                                                                                                                                                         
Forwarding                    http://7c1f0d31.ngrok.com -> 127.0.0.1:8000                                                                                                                     
Forwarding                    https://7c1f0d31.ngrok.com -> 127.0.0.1:8000                                                                                                                    
Web Interface                 127.0.0.1:4040                                                                                                                                                  
# Conn                        12                                                                                                                                                              
Avg Conn Time                 77.38ms                                                                                                                                                         
                                                                                                                                                                                              


HTTP Requests                                                         
-------------                                                         
                                                                      
GET /android/www/cordova_plug 200 OK                                  
GET /android/www/cordova.js   200 OK                                  
GET /android/www/img/logo.png 200 OK                                  
GET /android/www/css/index.cs 200 OK                                  
GET /android/www/js/index.js  200 OK                                  
GET /android/www/cordova.js   200 OK                                  
GET /android/www/             200 OK       
```

- Ngrok will attribute you a temporary subdomain `7c1f0d31.ngrok.com` that will forward to your local port 8000

- Launch `Phonegap App Developer` on your phone and add the reachable subdomain `7c1f0d31.ngrok.com`


### Browser testing using the Ripple emulator

#### /!\ This is not recommended by Cordova developers (but still work pretty well IMO)

Run in the project:

```
npm install -g ripple-emulator
ripple emulate
```


### Native Android emulator testing

#### /!\ This takes some time to load...


- Install AVD's with the `android` command (GUI) 
- Launch them with `cordova emulate android` 
