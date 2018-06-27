import React, { Component } from 'react';
import FriendsList from './FriendsList';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friendsData: [],
      friend: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log("Get Response",response);
      this.setState({friendsData: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  handleSubmitFriend = () => {
    const friend ={ name: this.state.friend };
    axios
    .post('http://localhost:5000/friends',  friend )
    .then(response => {
      console.log("POST Response",response);
    this.setState({ friendsData: response.data, friend: '' });
    })
    .catch(error => console.log(error));
  };

  handleNameChange = e => {
    this.setState({ friend: e.target.value });
  };

  

  render() {
    return (
      <div className="App">
        
        <input 
        type= 'text' 
        placeholder="friend name" 
        onChange={this.handleNameChange} 
        name="friend"
        value={this.state.friend}
          />
          <button onClick={this.handleSubmitFriend}>Submit Friend</button>
        <FriendsList friends={this.state.friendsData} />
        
      </div>
    );
  }
}

export default App;
