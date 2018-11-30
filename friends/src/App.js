import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

const serverURL = 'http://localhost:5000/friends';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      formUpdating: false
    }
  }

  componentDidMount() {
    axios.get(serverURL)
    .then(res => {
      console.log(res);
      this.setState({friends: res.data})
    })
  }

  addFriend = (friend) => {
    axios
      .post(serverURL, friend)
      .then(res => this.setState({ 
        friends: res.data
        }))
  }

  update = (id) => {
    let updatingFriend = this.state.friends.find(friend => {
      return friend.id === id;
    });
    this.setState({updatingFriend: updatingFriend, formUpdating: true})
  }

  updateFriend = (friend) => {
    axios
      .put(`${serverURL}/${this.state.updatingFriend.id}`, friend)
      .then(res => this.setState({
        friends: res.data,
        formUpdating: false,
        updatingFriendId: 0
      }))
  }

  deleteFriend = () => {
    axios
      .delete(`${serverURL}/${this.state.updatingFriend.id}`)
      .then(res => this.setState({ 
        friends: res.data,
        formUpdating: false,
        updatingFriendId: 0,
      }))
  }
  
  render() {
    return (
      <>
      <FriendForm 
        updateFriend={this.updateFriend} 
        addFriend={this.addFriend}
        deleteFriend={this.deleteFriend}
        appState={this.state}
        handleChange={this.handleChange}
      />

      <div className="App">
      {this.state.friends.map(friend => (
          <Friend friend={friend} 
            key={friend.id} 
            update={this.update}
            />))}
      </div>
      </>
    );
  }
}

export default App;
