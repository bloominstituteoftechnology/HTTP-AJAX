import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: null
    };
    console.log(this.state.friends);
  }
  deleteFriend = (id) => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      console.log(response);        
    })
    .catch(error => {
      console.error("Server Error", error);
    });
  };

  componentDidMount() {
    this.fetchFriends();
  }

  componentDidUpdate(prevProps, prevState){
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        if(response.data !== prevState){
          this.setState(() => ({ friends: response.data }));
        }        
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    
  }

  fetchFriends() {
    axios
      .get("http://localhost:5000/friends")

      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <div className="App">
        <FriendsForm friends={this.state.friends} fetchFriends={this.fetchFriends}/>
        <h1>FriendsList</h1>
        <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend}/>
      </div>
    );
  }
}

export default App;
