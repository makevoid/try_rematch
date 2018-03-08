import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Provider, connect } from 'react-redux'
import { init } from '@rematch/core'



const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.increment(payload)
    }
  }
}

const store = init({
  models: {
    count
  }
})


// ------


const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
)

const mapState = state => ({
  count: state.count
})

const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1)
})

const CountContainer = connect(mapState, mapDispatch)(Count)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <CountContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
