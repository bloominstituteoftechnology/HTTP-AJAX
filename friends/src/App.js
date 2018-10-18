import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import AddNewFriend from './Components/AddNewFriend';
import DisplayFriends from './Components/DisplayFriends';


class App extends Component {
  constructor() {
    super();
    this.state = {
   
      friends: [],
      newFriend:{
        name : '',
        age : 0,
        email:'',
      },
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  
  }

  onInputChange = e => {
    e.preventDefault();

     this.setState({ 
       newFriend: {
          ...this.state.newFriend,
         [e.target.name]: e.target.value,
        }
      });
     
  }

  addFriend = e => {

    e.preventDefault();

    axios 
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));

    this.setState({ 
      newFriend: {       
         name : '',
        age : 0,
        email:'',
       }
     });
  }

  deleteFriend = (e, id) => {
    e.preventDefault();

    axios 
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  updateFriend = (friend) => {

    axios 
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(response => this.setState({ friends: response.data }))
    .catch(error => console.log(error));
  }

  // updateFriend = (e, friend) => {
  //   e.preventDefault();

  //   axios 
  //     .delete(`http://localhost:5000/friends/${id}`)
  //     .then(response => this.setState({ friends: response.data }))
  //     .catch(error => console.log(error));
  // }

  render() {
    // console.log(this.state.newFriend);
    return (
      <div className="App">

       <AddNewFriend onInputChange={this.onInputChange} addFriend={this.addFriend}
        newFriend={this.state.newFriend} />
     
      <DisplayFriends friends={this.state.friends} deleteFriend={this.deleteFriend}
          updateFriend={this.updateFriend} />    
       </div>
    );
  }
}

export default App;
