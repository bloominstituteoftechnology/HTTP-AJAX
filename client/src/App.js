import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Friends from './components/Friends';

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName="selected" className="nav-item" to="/">Home</NavLink>
        <NavLink activeClassName="selected" className="nav-item" to="/friends">Friends</NavLink>
      </nav>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/friends" render={props => <Friends {...props} />} />
    </div>
  );
};

export default App;