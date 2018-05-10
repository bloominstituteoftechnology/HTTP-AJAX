import React, { Component } from 'react';
import './App.css';
import FriendDetails from './FriendDetails';
import FriendCard from './FriendCard';


const App = () =>{
  return (
    <div className="App">
      <h1>Welcome my Friends!</h1>
      <FriendDetails />
      <FriendCard />
    </div>
  );
}

export default App;
