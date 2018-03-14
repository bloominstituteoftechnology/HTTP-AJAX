import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FriendsList from './FriendsList';

        
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FriendsList} />
        </div>
      </Router>
        
    );
  }
}

export default App;
