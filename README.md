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

