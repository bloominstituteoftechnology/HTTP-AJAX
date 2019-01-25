import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from '../src/components/FriendsList'
import FriendsForm from '../src/components/FriendsForm'

class App extends Component {
    constructor(){
    super();
    this.state = {
    }
  }
  postFriendToServer = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        console.log(response.data);
        this.setState({friends: response.data});
        })
        .catch(err => {
          console.log("Error", err)
      });
    }

  render() {
    return(
      <div className="App">
        <FriendsForm postFriendToServer={this.postFriendToServer}/>
         <FriendsList />
         
      </div>
    )
  }
}

export default App;


