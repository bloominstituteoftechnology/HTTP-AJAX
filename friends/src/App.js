import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/friendsList/FriendsList';
import FriendsForm from './components/friendsList/FriendsForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: []
    }
    
  }
  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState({friends:res.data}) )
    console.log(this.state)
    }; 
  postFriendToServer = friend => {
    axios
    .post('http://localhost:5000/friends', friend)
    .then(response =>{
      this.setState({friends:response.data})
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }
    
  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <FriendsForm postFriendToServer = {this.postFriendToServer} />
        <FriendsList friends = {this.state.friends}/>
      </div>
    );
  }
}

export default App;
