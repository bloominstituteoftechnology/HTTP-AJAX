import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Route, Link} from 'react-router-dom';
import "./App.css";

import FriendList from './Components/FriendList';
import FriendForm from './Components/FriendForm';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      friends: []
      // postFriendMessage: ''
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("response:", response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.error("you got an error:", err));
  }

  postFriend = friend => {
    console.log('post friend.. ')
    // e.preventDefault();
    axios
    .post("http://localhost:5000/friends", friend)
    .then(response =>{
      console.log("post response", response)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('post error:', err))
  }

  updateFriend = (friend, id) => {
    console.log('post friend.. ')
    // e.preventDefault();
    axios
    .put(`http://localhost:5000/friends/${id}`, friend)
    .then(response =>{
      console.log("post response", response)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('post error:', err))
  }

  
  render() {
    return (
      <div className="App">
        <h1>Jamar works on HTTP-AJAX</h1>
        <Route exact path="/" render={props => <FriendList {...props} friends={this.state.friends}/> }/>
        {/* <Route path ="/friends" /> */}
        <FriendForm 
          postFriend={this.postFriend}
        />
      </div>
    );
  }
}

export default App;
