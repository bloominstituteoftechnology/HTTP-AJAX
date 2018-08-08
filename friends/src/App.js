import React, { Component } from 'react';
import './App.css';
import FriendsList from './component/FriendsList';
import SubmitFriendForm from './component/SubmitFriendForm';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      friends:[]
    }
  }
  
  componentDidMount =()=>{
    this.updateFriends();
  }
  updateFriends=()=>{
    axios.get('http://127.0.0.1:5000/friends').then(response => {
      this.setState({
        friends: response.data
      })
     })
     .catch(err => {
       console.log(err);
     });
  }
  render() {
    return (
      <div className="App">
      <FriendsList friends={this.state.friends} />
      <SubmitFriendForm methodToCall={this.updateFriends} />
      </div>
    );
  }
}

export default App;
