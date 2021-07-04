import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path = "/" component={FriendsList} />
          <Route path = "/friends/:id" component={Friend} />
        </div>
      </Router>
    );
  }
}

export default App;
