import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';// store Enhancer
import { BackHandler } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Firebase } from './config';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import Router from './Router';
class App extends Component {
  render() {
    const store = createStore(
      reducers, {}, applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
            <Router />
      </Provider>
    )
  }
}

export default App;
