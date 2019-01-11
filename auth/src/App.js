import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './components/common';
import { Firebase } from './config'
import LoginForm from './components/LoginForm';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
};
