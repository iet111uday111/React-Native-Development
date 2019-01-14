import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';// store Enhancer

import { Firebase } from './config';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
class App extends Component {
  render() {
    const store = createStore(
      reducers, {}, applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
            <LoginForm />
      </Provider>
    )
  }
}

export default App;
