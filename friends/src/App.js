import React, { Component } from 'react';
import './App.css';
import DisplayList from './components/DisplayList'


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <DisplayList />
      </div>
    );
  }
}

export default App;
