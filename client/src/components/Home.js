import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div>
      <h1>Hello Stranger</h1>
      <NavLink className="nav-item" to="/friends">Enter</NavLink>
    </div>
  );
};

export default Home;