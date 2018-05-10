import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import { NavLink } from 'react-router-dom';

class App extends Component {




  render() {
    return (
    <div>  
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <NavLink className="navbar-brand" to="/">Friends</NavLink>

        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/add">Add Friend</NavLink>
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
