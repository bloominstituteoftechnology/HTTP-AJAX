import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Inside your React application, create a component to display the list of friends coming from the server.
// Add a form to gather information about a new friend.
// Add a button to save the new friend by making a POST request to the same endpoint listed above.
// Each friend should have the following properties:
// {
//   name: should be a string,
//   age: should be a number,
//   email: should be a string,
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
