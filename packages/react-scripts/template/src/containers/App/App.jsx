import React, { Component } from 'react';

import logo from '../../assets/logo.svg';
import Link from '../../components/Link';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/containers/App.jsx</code> and save to reload.
          </p>
          <Link href="https://reactjs.org" label="Learn React" />
        </header>
      </div>
    );
  }
}

export default App;
