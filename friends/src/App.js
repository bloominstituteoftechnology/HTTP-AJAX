import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import Friend from './components/Friend';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: {
        name:"",
        age: "",
        email:""
      }
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends:response.data}))
      .catch(error => console.log(error))
  }

  changeHandler = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  }

  addFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({ friends: response.data}))
  }

  deleteFriend = (event,id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <NewFriendForm 
          changeHandler={this.changeHandler}
          newName={this.state.newFriend.name}
          newAge={this.state.newFriend.age}
          newEmail={this.state.newFriend.email}
          addFriend={this.addFriend}
        />
        <FriendsList friend={this.state.friends} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
