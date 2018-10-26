import React, { Component } from 'react';
import {Route} from "react-router-dom";
import DisplayFriends from "./Components/DisplayFriends"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DisplayFriends} />
      </div>
    );
  }
}

export default App;
