import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Friend List</Link>
        <Link to="/friendform">Friend Form</Link>
        <Route exact path="/" component={FriendList} />
        <Route path="/friendform" component={FriendForm} />
      </div>
    );
  }
}

export default App;
