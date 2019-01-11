import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '@firebase/app';

import { Header } from './components/common';
import { config } from './config'
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const fire = firebase.initializeApp(config);
    console.log(fire);
    
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
};
