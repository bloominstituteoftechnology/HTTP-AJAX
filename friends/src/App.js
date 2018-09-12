import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <section className="App">
      <h1>Friends</h1>

      <Friends />

      </section>
    );
  }
}

export default App;
