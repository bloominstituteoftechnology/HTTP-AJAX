import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Route, Link} from 'react-router-dom';
import "./App.css";

import FriendList from './Components/FriendList';
import FriendForm from './Components/FriendForm';
import UpdateFriendComponent from './Components/UpdateFriendComponent';

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
      console.log("put response", response.data)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('put/update error:', err))
  }

  deleteFriend = id => {
    console.log('delete friend.. ')
    // e.preventDefault();
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response =>{
      console.log("delete response", response.data)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('delete error:', err))
  }


 changeFriendHandler = e => {
   this.setState({
    friendInfo: {
      ...this.state.friendInfo,
      [e.target.name]: e.target.value
          }
   })
 }
  
  render() {
    return (
      <div className="App">
        <h1>Jamar works on HTTP-AJAX</h1>
        <Route exact path="/" render={props => <FriendList {...props} updateFriend={this.updatefriend} deleteFriend={this.deleteFriend} friends={this.state.friends}/> }/>
        {/* <Route path ="/friends" /> */}
        <FriendForm 
          postFriend={this.postFriend}
        />
        <Route exact path='/friends/:id' render={props =>  <UpdateFriendComponent updateFriend={this.updateFriend} />} />
      </div>
    );
  }
}

export default App;
