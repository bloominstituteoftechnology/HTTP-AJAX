import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import FriendList from './FriendList';
import NewFriend from './NewFriend';

const App = () => {
  return (
      <div>
          <Route path='/' component={FriendList}/>
          <Route path='/' component={NewFriend} />
      </div>
  );
}

export default App;