import React, { Component } from 'react';
import './App.css';
import FriendsList from '../src/components/FriendsList'
import FriendsForm from '../src/components/FriendsForm'

class App extends Component {
  render(){
    return(
      <div className="App">
        <FriendsForm />
         <FriendsList />
         
      </div>
    )
  }
}

export default App;


