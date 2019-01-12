Create React Native apps with no build configuration.

- [Getting Started](#getting-started)

Once you're up and running with Create React Native App, visit [this tutorial](https://facebook.github.io/react-native/docs/tutorial.html) for more information on building apps with React Native.

**Note: Create React Native App has been merged with Expo CLI** You can now use `expo init` to create your project. See [Quick Start](https://docs.expo.io/versions/latest/) in the Expo documentation for instructions on getting started using Expo CLI.

The `create-react-native-app` command is provided for backwards compatibility.

If you created your app using `create-react-native-app`, it's already compatible with Expo CLI. See [upgrade instructions](https://github.com/react-community/create-react-native-app/blob/master/CHANGELOG.md#upgrading-from-1140-to-201).

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

```sh
$ npm install -g expo-cli
$ expo init my-app
$ cd my-app/
$ npm start
```

The `npm start` command starts the Expo CLI server. You can now run the project on your phone by using the Expo app.

### Android

- Install the [Expo](https://expo.io) app on your Android device.
- Scan the QR code in your terminal from the Expo app to run the project on your phone.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

### iOS

- Install the [Expo](https://expo.io) app on your iOS device.
- Press 'e' in the terminal to send the app link to your email address or phone number. This link can be used to run your project from the Expo app.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

Expo CLI allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo app provides.

## Sections

- [Getting Started](#getting-started)
- [Philosophy](#philosophy)
- [Support and Contact](#support-and-contact)
- [FAQs](#faqs)
- [Contributing](#contributing)

## Getting Started

### Installation

See [Installation](https://docs.expo.io/versions/latest/introduction/installation).

### Creating an App

To create a new app, run:

```sh
expo init
```

This will create a directory called `my-app` inside the current working directory. Inside `my-app`, this will generate the initial project structure and install all of its dependencies.

If you're familiar with React Native already, you won't find any `ios` or `android` directories in this project, just JavaScript. Once this installation is done, there are some commands you can run in the project directory:

#### `npm start`

Runs your app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Philosophy

- **Minimal "Time to Hello World"**: Create React Native App should reduce the setup time it takes to try building a mobile app to the absolute minimum, ideally on par with React web development (especially as seen with [Create React App](https://github.com/facebookincubator/create-react-app)).
- **Develop on Your Device**: It should be easy to develop on a physical device when you want to test how your app feels and responds to inputs.
- **One Build Tool**: If you just want to get started with React Native, you shouldn't need to install Xcode, Android Studio, NDKs, or mess with environment variables.
- **No Lock-In**: You can always "eject" to your own build setup if you need to write custom native code or modify how your app is built.

## Support and Contact

If you're having issues with Create React Native App, please make sure:

- The issue is not covered in the [Expo Docs](https://docs.expo.io/versions/latest/)
- There is not already an [open issue](https://github.com/expo/expo-cli/issues) for your particular problem

If you've checked the documentation and currently open issues, please either [open a new GitHub issue](https://github.com/expo/expo-cli/issues/new) or ask a question on [Expo forums](https://forums.expo.io/c/help). **Please do not DM or email project maintainers directly**, as it's very important that support takes place in public locations where others can benefit from the conversation.

## FAQs

### What API specification should I be looking at while developing?

Apps made with Create React Native App support everything in the Components and APIs sections of the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html).

Apps made with Create React Native App also support most of the JavaScript-to-Native APIs provided by the [Expo SDK](https://docs.expo.io/versions/latest/sdk/index.html), since they are loaded by the Expo app.

### What are the limitations of Create React Native App?

The main limitation of a Create React Native App project is that it must be written in pure JavaScript and not have any dependencies which rely on custom native code (i.e. ones which require running `react-native link` to work). This allows the projects to load directly on a phone without native compilation, and also means that it's not necessary to install or use Android Studio or Xcode.

### What if I want to write custom native code for my app?

If you're sure that you need custom native code, please read the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md).

### How do I get my app into the Play Store/App Store?

If you need to build IPAs and APKs for publishing to the App Store and/or Play Store, you can either eject (see above guide) and build them yourself using Xcode and Android Studio, or you can use a service like [Expo's standalone app builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) to publish your pure JS app.


### Screenshots

#### Setup ESLINT in Editor
![Screenshot](./Screenshots/Screenshot1.png?raw=true "Screenshot")

#### React Vs React-Native
![Screenshot](./Screenshots/Screenshot2.png?raw=true "Screenshot")

#### Albums App - Mockup 1
![Screenshot](./Screenshots/Screenshot3.png?raw=true "Screenshot")

#### Albums App - Mockup 2
![Screenshot](./Screenshots/Screenshot4.png?raw=true "Screenshot")

#### App Registry in React Native
![Screenshot](./Screenshots/Screenshot5.png?raw=true "Screenshot")

#### Flexbox Align Item : Flex-End
![Screenshot](./Screenshots/Screenshot6.png?raw=true "Screenshot")

#### Flexbox Align Item : Flex-Start
![Screenshot](./Screenshots/Screenshot7.png?raw=true "Screenshot")

#### Flexbox Justify-Content: Flex-Start
![Screenshot](./Screenshots/Screenshot8.png?raw=true "Screenshot")

#### Flexbox Justify-Content: Center
![Screenshot](./Screenshots/Screenshot9.png?raw=true "Screenshot")

#### Flexbox Justify-Content: Flex-End
![Screenshot](./Screenshots/Screenshot10.png?raw=true "Screenshot")

#### Default Status of React Native
![Screenshot](./Screenshots/Screenshot11.png?raw=true "Screenshot")

#### Use Props 
![Screenshot](./Screenshots/Screenshot12.png?raw=true "Screenshot")

#### Album Module  
![Screenshot](./Screenshots/Screenshot13.png?raw=true "Screenshot")

#### Album App - List of Components
![Screenshot](./Screenshots/Screenshot14.png?raw=true "Screenshot")

#### Functional vs Class Based Component
![Screenshot](./Screenshots/Screenshot15.png?raw=true "Screenshot")

#### Flow React Native Application
![Screenshot](./Screenshots/Screenshot16.png?raw=true "Screenshot")

#### Flow React Native Application using State
![Screenshot](./Screenshots/Screenshot17.png?raw=true "Screenshot")

#### Rules  of State - 1
![Screenshot](./Screenshots/Screenshot18.png?raw=true "Screenshot")

#### Rules  of State - 2
![Screenshot](./Screenshots/Screenshot19.png?raw=true "Screenshot")

#### Album Details Components
![Screenshot](./Screenshots/Screenshot20.png?raw=true "Screenshot")

#### Album Details Components Elements - Approach 1
![Screenshot](./Screenshots/Screenshot21.png?raw=true "Screenshot")

#### Album Details Components Elements - Approach 2
![Screenshot](./Screenshots/Screenshot22.png?raw=true "Screenshot")

#### Card 
![Screenshot](./Screenshots/Screenshot23.png?raw=true "Screenshot")

#### Justify Content: Space-between
![Screenshot](./Screenshots/Screenshot24.png?raw=true "Screenshot")

#### Justify Content: Space-around
![Screenshot](./Screenshots/Screenshot25.png?raw=true "Screenshot")

#### Justify Content: flex-end
![Screenshot](./Screenshots/Screenshot26.png?raw=true "Screenshot")

#### Justify Content: Center
![Screenshot](./Screenshots/Screenshot27.png?raw=true "Screenshot")

#### Justify Content: flex-start
![Screenshot](./Screenshots/Screenshot28.png?raw=true "Screenshot")

#### Card Template for Album App
![Screenshot](./Screenshots/Screenshot29.png?raw=true "Screenshot")

#### devhints : CheatBox for Developers
![Screenshot](./Screenshots/Screenshot30.png?raw=true "Screenshot")

#### TextContainer Css Template React Native
![Screenshot](./Screenshots/Screenshot31.png?raw=true "Screenshot")

#### Card Section Css Template React Native
![Screenshot](./Screenshots/Screenshot32.png?raw=true "Screenshot")

#### flex Direction & justify-content -1
![Screenshot](./Screenshots/Screenshot33.png?raw=true "Screenshot")

#### flex Direction & justify-content -2
![Screenshot](./Screenshots/Screenshot34.png?raw=true "Screenshot")

#### Album App- Screenshot-1
![Screenshot](./Screenshots/Screenshot35.png?raw=true "Screenshot")

#### Album App- Screenshot-2
![Screenshot](./Screenshots/Screenshot36.png?raw=true "Screenshot")

#### Album App- Screenshot-3
![Screenshot](./Screenshots/Screenshot37.png?raw=true "Screenshot")

#### Album App- Screenshot-4
![Screenshot](./Screenshots/Screenshot38.png?raw=true "Screenshot")

#### Album App- Screenshot-5
![Screenshot](./Screenshots/Screenshot39.png?raw=true "Screenshot")

#### Album App- Screenshot-6 - After Click on Buy Now of Red Album
![Screenshot](./Screenshots/Screenshot40.png?raw=true "Screenshot")

#### Album App- Screenshot-7 - Goes to Amazon store to buy clicked Album
![Screenshot](./Screenshots/Screenshot41.png?raw=true "Screenshot")

#### Auth App- Basic Skelton-1
![Screenshot](./Screenshots/Screenshot42.png?raw=true "Screenshot")

#### Auth App- Basic Skelton-2
![Screenshot](./Screenshots/Screenshot43.png?raw=true "Screenshot")

#### Import all file using index.js
![Screenshot](./Screenshots/Screenshot44.png?raw=true "Screenshot")

#### Use of firebase
![Screenshot](./Screenshots/Screenshot45.png?raw=true "Screenshot")

#### TextInput with State
![Screenshot](./Screenshots/Screenshot46.png?raw=true "Screenshot")

#### SignIn an User
![Screenshot](./Screenshots/Screenshot47.png?raw=true "Screenshot")

#### Tech Stack App Mock
![Screenshot](./Screenshots/Screenshot48.png?raw=true "Screenshot")

#### Understand Redux mock 1
![Screenshot](./Screenshots/Screenshot49.png?raw=true "Screenshot")

#### Understand Redux mock 2
![Screenshot](./Screenshots/Screenshot50.png?raw=true "Screenshot")

#### Understand Redux mock 3
![Screenshot](./Screenshots/Screenshot51.png?raw=true "Screenshot")

#### Provider in Redux
![Screenshot](./Screenshots/Screenshot51.png?raw=true "Screenshot")

### IMP Links

[Running react-native app in ubuntu 18.04](https://medium.com/@dooboolab/running-react-native-app-in-ubuntu-18-04-7d1db4ac7518)

[Say “Hello world” using React Native in Linux](https://code.likeagirl.io/say-hello-world-using-react-native-in-linux-15955986bc44)

[Getting Started with React Native on Ubuntu Linux](http://www.proreactnative.com/Getting-Started-with-React-Native-on-Ubuntu-Linux/)

[How to Install and Setup React Native on Ubuntu 18.04.1 LTS (Bionic Beaver)](https://www.techomoro.com/how-to-install-and-setup-react-native-on-ubuntu-18-04-1-lts-bionic-beaver/)

[How to Install and Setup React Native on Ubuntu 17.10](https://www.techomoro.com/how-to-install-and-setup-react-native-on-ubuntu-17-10/)

[How to install React Native on Ubuntu 17.10](https://www.moveoapps.com/blog/how-to-install-react-native-on-ubuntu-17-10/)

[Getting started with React Native – A complete setup guide](https://habiletechnologies.com/blog/getting-started-react-native-complete-setup-guide/)

[How to structure your project and manage static resources in React Native](https://medium.freecodecamp.org/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92)

[How To Structure a React Native App For Scale](https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc)

[Best practices for creating React Native apps — Part 1](https://medium.com/react-native-training/best-practices-for-creating-react-native-apps-part-1-66311c746df3)

[5 Best Practices for React Native Development You Probably Don’t Know](https://medium.com/skyshidigital/5-best-practices-for-react-native-development-you-probably-doesnt-know-474df87d74e6)

[React Native The folder structure](https://subscription.packtpub.com/book/application_development/9781787282537/2/02lvl1sec18/the-folder-structure)

[react-native-folder-structure](https://github.com/asimolmez/react-native-folder-structure)

[Project Structure React Native](https://airbnb.io/native-navigation/docs/guides/project-structure.html)

[Project structure React Native](https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.0-intro.html)

[What is the difference between React Native and React?](https://stackoverflow.com/questions/34641582/what-is-the-difference-between-react-native-and-react)

[React VS React Native: How do these App Development Technologies Compare?](https://insights.daffodilsw.com/blog/react-vs-react-native-how-do-these-app-development-technologies-compare)


[What are five differences between React.js and React Native?](https://www.quora.com/What-are-five-differences-between-React-js-and-React-Native)

[Transitioning from React Web to React Native Development](https://hackernoon.com/transitioning-from-react-web-to-react-native-development-c8e6df57a92e)

[The Good and the Bad of ReactJS and React Native](https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/)

[Integrating React-native apps with back-end code using fetch API](https://codeburst.io/integrating-react-native-apps-with-back-end-code-using-fetch-api-8aeb83dfb428)

[React Native Fetch Example Tutorial From Scratch](https://appdividend.com/2018/03/25/react-native-fetch-example-tutorial/)

[Interacting with APIs Using React Native Fetch](https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb)

[React Native - Async HTTP POST Request](https://www.thesunflowerlab.com/blog/react-native-async-http-post-request/)

[Tutorial: How to make HTTP requests in React, Part 1](https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-1-f7afa3cd0cc8)

[Tutorial: How to make HTTP Requests in React, Part 2](https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-2-4cfdba3ec65)

[Tutorial: How to make HTTP Requests in React, Part 3](https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be)

[Which method is the best for API calling in React Native?](https://www.quora.com/Which-method-is-the-best-for-API-calling-in-React-Native)

[React Native - Fetch POST request is sending as GET request](https://stackoverflow.com/questions/35140358/react-native-fetch-post-request-is-sending-as-get-request)

[Understanding React Native Component Lifecycle Api](https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d)

[React State vs Props explained](https://codeburst.io/react-state-vs-props-explained-51beebd73b21)

[ReactJS: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)

[What is the difference between state and props in React?](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react)

[What is the difference between state and props in React?](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react)

[Props vs. State in React JS](https://blog.cloudboost.io/props-vs-state-in-react-js-9c186dcf39b8)

[PROPS VS STATE IN REACT](https://flaviocopes.com/react-state-vs-props/)

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

[Understanding State and Props in ReactJS](https://www.agiliq.com/blog/2018/05/understanding-react-state-and-props/)

[State vs Props in React](http://www.hackingwithreact.com/read/1/10/state-vs-props-in-react)

[What is the difference between state vs. props in React?](https://appendto.com/2016/05/what-is-difference-between-props-and-state/)

[props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)

[Flexbox in CSS](https://cssreference.io/flexbox/)

[Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

[FLEXBOX FROGGY](https://flexboxfroggy.com/)

[Use Cases For Flexbox](https://www.smashingmagazine.com/2018/10/flexbox-use-cases/)

[Flex](https://getbootstrap.com/docs/4.1/utilities/flex/)

[Flex-cheatsheet](https://yoksel.github.io/flex-cheatsheet/)

[The Complete CSS Flex Box Tutorial](https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc)

[GRID VS FLEXBOX: WHICH SHOULD YOU CHOOSE?](https://www.webdesignerdepot.com/2018/09/grid-vs-flexbox-which-should-you-choose/)

[Use CSS Flexbox to Center Anything Vertically & Horizontally - Images, Text or DIVs Without Floats (Tutorial)](https://love2dev.com/blog/absolute-centering-css/)

[flexbox](https://internetingishard.com/html-and-css/flexbox/)

[CSS flexbox cheatsheet](https://devhints.io/css-flexbox)

[The React Handbook](https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795)

[FlexBox-justify-content](https://css-tricks.com/almanac/properties/j/justify-content/)

[FlexBox-flex-direction](https://css-tricks.com/almanac/properties/f/flex-direction/)

[FlexBox-flex-wrap](https://css-tricks.com/almanac/properties/f/flex-wrap/)

[FlexBox-flex-flow](https://css-tricks.com/almanac/properties/f/flex-wrap/)

[Tips for React Native Images (or saying goodbye to trial and error)](https://medium.com/the-react-native-log/tips-for-react-native-images-or-saying-goodbye-to-trial-and-error-b2baaf0a1a4d)

[Handling Text Input](https://facebook.github.io/react-native/docs/handling-text-input)

[Improving User Experience](https://facebook.github.io/react-native/docs/improvingux)

[TextInput](https://facebook.github.io/react-native/docs/textinput)

[Communication between native and React Native](https://facebook.github.io/react-native/docs/communication-ios)

[Handling Touches](https://facebook.github.io/react-native/docs/handling-touches)

[InteractionManager](https://facebook.github.io/react-native/docs/interactionmanager)

[Button](https://kmagiera.github.io/react-native-gesture-handler/docs/component-buttons.html)

[Header buttons](https://reactnavigation.org/docs/en/header-buttons.html)

[React-native, render a button click dynamically](https://stackoverflow.com/questions/37527446/react-native-render-a-button-click-dynamically)

[Essential cross-platform UI components for React Native - NativeBase](https://nativebase.io/docs/v0.5.7/guide/what-is-nativebase)

[React-Native Press and Hold Button Actions](https://codedaily.io/tutorials/24/React-Native-Press-and-Hold-Button-Actions)




