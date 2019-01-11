import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import { Firebase } from './config';

import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {
    loggedIn: false
  }
  
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn: false})
      }
    })
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
