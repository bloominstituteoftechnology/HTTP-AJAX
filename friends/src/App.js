import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList';
import Forms from './components/Forms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FriendsList} />

<Forms />
      </div>
    );
  }
}

export default App;
