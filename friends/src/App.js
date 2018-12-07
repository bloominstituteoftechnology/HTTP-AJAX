import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>  
      <nav className="navbar navbar-ex skinny-nav big-nav mb-3">
        <NavLink className="navbar-brand" to="/">Friends</NavLink>

        <div className="navbar-2">
          <NavLink className="nav-info nav-link" to="/add">Add Friend</NavLink>
        </div>        
      </nav>

      <div className="container">
        <FriendsList />
      </div>
    </div>
    );
  }
}

export default App;
