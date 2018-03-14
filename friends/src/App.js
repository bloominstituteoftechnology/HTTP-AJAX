import React, { Component } from 'react';

import DisplayFriends from './components/DisplayFriends';
import { Route } from 'react-router-dom';
import Nav from './components/Nav'


import './App.css';

import AddFriend from './components/AddFriend';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Route path='/' component={Nav} /> */}
        <Route exact path='/' component={DisplayFriends}/>
        <Route path='/input/' component={AddFriend} />

      </div>
    );
  }

  
}

export default App;
