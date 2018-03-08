import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'

import store from './store'

import Count from './comps/Count'
import Header from './comps/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Provider store={store}>
          <Count />
        </Provider>
      </div>
    );
  }
}

export default App;
