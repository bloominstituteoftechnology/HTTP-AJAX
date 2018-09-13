import React, { Component } from 'react';
import Nav from './components/navigation/Nav';
import './App.css';
import Routes from './components/route/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
