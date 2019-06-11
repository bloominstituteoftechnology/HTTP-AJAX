import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>React Friends</h1>
        </header>
      </div>
    );
  }
}

export default App;
