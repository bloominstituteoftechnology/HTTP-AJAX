import React, { Component } from 'react';
import logo from './logo.svg';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/components.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={FriendsList} />
          <Route path="/" component={AddFriendForm} />
        </div>
      </Router>
    );
  }
}

export default App;
