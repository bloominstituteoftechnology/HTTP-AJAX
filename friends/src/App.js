import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Link } from 'react-router-dom'; 
import './App.css';

import FriendList from './components/FriendList/FriendList';
import NewFriendList from './components/FriendList/NewFriendList';
import PostForm from './components/PostForm/PostForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:5000/friends',
      friendsArray: [],
      newFriendsArray: [],
      newFormInput: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    // Get request to read the existing user
    axios.get(this.state.url)
      .then(response => response.data)
      .then(data => this.setState({ friendsArray: data }))
      .catch(e => console.error(e));
  }

  handleAddFriend() {
    const lastIndex = [this.state.friendsArray.length - 1];
    const newId = this.state.friendsArray[lastIndex].id + 1;
    const newFriendsArray = this.state.newFriendsArray;

    const newFriend = Object.assign(this.state.newFormInput, { id: newId });

    // Post request to add new user
    axios.post(this.state.url, newFriend)
      // Transform the promise to array
      .then(response => response.data)
      .then(data => {
        // Update the Friend component
        this.setState({ friendsArray: data });
         // Update the NewFriend component
        this.setState({ newFriendsArray: newFriendsArray.concat(data.slice(data.length - 1)) });
      })
      .catch(e => console.error(e));
  }

  handleOnChange(e) {
    const targetValue = e.target.value;
    const target = e.target.placeholder;
    const newKey = Object.keys(this.state.newFormInput).filter(key => key === target);
    const newFormInput = this.state.newFormInput;

    newFormInput[newKey] = targetValue;
    
    this.setState({ newFormInput: newFormInput });
  }

  handleDeleteFriend(e) {
    // Get the id to match for delete request
    const targetId = e.target.dataset.id;

    axios.delete(`${this.state.url}/${targetId}`)
      .then(response => response.data)
      // Update the state of component
      // TODO: manage case for NewFriendList too
      .then(data => {
        this.setState({ friendsArray: data });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/newfriends">New Friends</NavLink>
        <PostForm 
          handleAddFriend={this.handleAddFriend.bind(this)}
          handleOnChange={this.handleOnChange.bind(this)}
          newFormInput={this.state.newFormInput}
        />
        <Route path="/friends" render={(props) => <FriendList {...props} friendsArray={this.state.friendsArray} handleDeleteFriend={this.handleDeleteFriend.bind(this)} />} />
        <Route path="/newfriends" render={(props) => <NewFriendList {...props} newFriendsArray={this.state.newFriendsArray} />} />
      </div>
    );
  }
}

export default App;