import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';

        
class App extends Component {
  render() {
    return (
        <div className="app">
          <Navigation/>
          <Route exact path="/" component={ FriendsList } />
          <Route path="/add" component={ FriendsForm }/>
        </div>
    );
  }
}

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/add">Add New Friend</Link>
    </div>
  )
}


export default App;
