import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friends';
import FriendForm from './FriendForm';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  addNewFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => {
      this.setState({
        friends: response.data,
        
      
      })
    })
  }
  
 
  formChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend, 
        [e.target.name]: e.target.value,
      }
    })
  }

 


   componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }
  



  render() {
    return (
      <div className="App">
        <ul>
          {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
        </ul>
        <FriendForm  addNewFriend={this.addNewFriend} newFriend={this.state.newFriend} formChange={this.state.formChange} />
      </div>
    );
  }
}
 export default App;