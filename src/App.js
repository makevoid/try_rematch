import React, { Component } from 'react';
import './App.css';
import Header from './comps/Header';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
}

export default App;
