import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Friends from "./components/Friends";
import PostFriendForm from './components/PostFriendForm'


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  refreshDataFromServer = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }

  postFriendToServer = friend => {
    axios.post("http://localhost:5000/friends", friend)
    .then( res => {
      const newFriends = this.state.friends;
      newFriends.push(friend)
      this.setState( { friends: newFriends } )
    })
    .catch( err => console.log(err))
  }

  deleteFriendFromServer = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then( res => console.log(res))
    .then(res => this.refreshDataFromServer())
    .catch( err => console.log(err))
  }

  updateFriendFromServer = (friend, id) => {
    axios.update(`http://localhost:5000/friends/${id}`, friend)
    .then( res => console.log(res))
    .then( res => this.refreshDataFromServer())
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <PostFriendForm postFriendToServer={this.postFriendToServer} />
        <Friends 
          friends={this.state.friends}
          deleteFriendFromServer={this.deleteFriendFromServer}
          updateFriendFromServer={this.updateFriendFromServer}
        />
      </div>
    );
  }
}

export default App;
