import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

import Friend from './Friend';
import FriendsList from './FriendsList';

class App extends Component {
constructor(){
  super();
  this.state ={
    friends: [],
    friend: ''
  };
}



  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response);
      this.setState({friends: response.data})
    })
    
      }

handleNameChange = e => {
  this.setState({friend: e.target.value});
}

handleSubmitFriend = () => {
  const friend = {friend: this.state.friend};
  axios.post("http://localhost:5000/friends", {friend})
  .then(response => {
    console.log('POST RESPONSE',response)
  this.setState({friends: response.data})
  })

  
  .catch(error => console.log(error));
}

  render() {
    return (
      <div className="App">
       
        <input type='text' 
        placeholder='friend name' 
        onChange={this.handleNameChange} 
        name='friend' 
        value={this.state.friend}/>

<button onClick={this.handleSubmitFriend}> Add Friend </button>

        <FriendsList friends={this.state.friends}/>

      </div>
    );
  }


}

export default App;
