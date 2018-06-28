import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom'; 
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

const URL = "http://localhost:5000/friends";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: "",
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    axios
        .get(URL)
        .then(response => {
          console.log(response);
          this.setState({ friends: response.data, newFriend: "" });
        })
        .catch(err => {
          console.log(err);
        })
      }
    
  handleNewFriend = e => {
    this.setState({ newFriend: e.target.value });
  }

  addNewFriend = () => {
    const friend = { name: this.state.newFriend};
    friend.age = Math.floor(Math.random() * 70) + 1;
    friend.email = Math.random().toString(36).substr(2, 9);
    
    axios
        .post(URL, friend)
        .then(response => {
          console.log("Post Response", response);
          this.getData();
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    return (
        <div className='App'>
          <h1>Friends</h1>
          <Route path='/' render={props => <FriendForm {...props} handleNewFriend={this.handleNewFriend} 
                                                                  newFriendValue={this.state.newFriend}
                                                                  addNewFriend={this.addNewFriend} /> } />
          <Route path='/friends/:id' component={Friend} />
          <Route path='/' render={props => <FriendsList {...props} friends={this.state.friends} />} />
        </div>
    );
  }
}

export default App;
