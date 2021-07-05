import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import AFuckingNavComponent from './components/AFuckingNavComponent';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AFuckingNavComponent />
        <Route exact path="/" component={FriendList} />
        <Route path="/friendform" component={FriendForm} />
        <Route path="/friends/:id" component={Friend} />
      </div>
    );
  }
}

export default App;
