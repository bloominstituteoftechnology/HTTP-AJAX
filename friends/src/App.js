import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendViewContainer from './FriendViewContainer';
import {Route} from 'react-router-dom';
import Friend from './friend'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path= "/" component={FriendViewContainer} />
      </div>
    );
  }
}

export default App;
