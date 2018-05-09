import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './Friends';
import Friend from "./Friend";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Friends} />
        <Route path="/friends/:id" component={Friend}/>
      </div>
    );
  }
}

export default App;
