## CartoMobileSDK React Native Wrapper

###### NB! This is a __Proof of Concept__ project and should not be seen or taken as a product. Contributions are encouraged

###### Additionally, this repository combines the sample project and component. Need to separate them: mobile-react-native-samples & official node package

#### Dependencies

* XCode
* Android Studio (+ Android SDK)
* [Node and NPM](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* Cocoapods CLI: `sudo gem install cocoapods`
* React Native CLI: `npm install -g react-native-cli`

#### Installation

* `npm install` to install React Native Module


##### iOS
* `cd ios`
* `pod install` to install CartoMobileSDK pod

##### Droid

* You may or may not need to manually open the Android Studio project and wait for gradle to automatically re-configure everything: 
	* Download CartoMobileSDK
	* Download or update Build Tools
	* Change the location of the SDK

#### Running the project

##### iOS

* `react-native run-ios`

Or Simply build and run the solution from XCode

##### Droid

* `react-native run-android`


#### Features

##### Layout

* Navigation bar
* Full-screen MapView
* Floating action button in bottom right corner

##### Features

* Initialize CTRMapView
* Register license
* Set Zoom
* Add base layer
* `TODO` Add some action to button
* `TODO` Add marker to map
* `TODO` Map click event listener

##### Author's notes

Firstly, I must say that I admire the guys at react-native for keeping the documentation so clean and up to date, however, what I would like to see is sample projects: simple, full, working examples of how to create a custom component and create the react-native bridge. 

They have a huge repository of their code snippets, but that makes it hard to navigate and I didn't manage to find a single working sample.


Now, I find React Native to still be too unstable to effectively develop custom components on. iOS is currently functional, but Android is displaying weird and inconsistent behaviour. Different versions behave differently. 

0.4.0 was a major version that updated lots of the underlying logic, apis. Older versions seem to be **more stable** and definitely offer **more working samples**, but I still opted for using the newest version.

View Manager creation seems to be broken at this point (react-native 0.4.2). Throws:

```
com.facebook.react.bridge.UnexpectedNativeTypeException: TypeError: expected dynamic type `int64', but had type `null'
```









