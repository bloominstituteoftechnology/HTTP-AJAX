import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend';
import FriendDelete from './FriendDelete';
import FriendUpdate from './FriendUpdate';
import FriendToUpdate from './FriendToUpdate';
import Form from './Form';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
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

  newFriends = (para1) => {
    axios.post('http://localhost:5000/friends', para1)
    .then(response => {
        console.log(para1);
        console.log(response);
        this.setState({
          friends: response.data
        })
    })
      .catch(err => console.log(err));
  }

  friendDelete = (id) => {
    // console.log(e.target);
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => this.setState({ friends: response.data }))
  }

  updateFriend = (event, id, para1) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${id}`, para1)
    .then(response => {
      console.log(para1);
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
        <h1>Friends</h1>
        <NavLink to="/current">
          Current Friends
        </NavLink>
        <NavLink to="/friend-form">
          New Friend Form 
        </NavLink>
        <NavLink to="/friends-delete">
          Delete Friends
        </NavLink>
        <NavLink to="/friend-update">
          Update Friend Info
        </NavLink>
            
        <Route path="/current" render={props => (
          <Friend {...props} friends={this.state.friends} />
        )}
        />
        <Route exact path="/friend-form" render={props => (
          <Form {...props} newFriends={this.newFriends} />
        )}
        />
        <Route exact path="/friends-delete" render={props => (
          <FriendDelete {...props} friends={this.state.friends} friendDelete={this.friendDelete} />
        )}
        />
        <Route path="/friend-update" render={props => (
          <FriendUpdate {...props} friends={this.state.friends} />
        )}
        />
        <Route path="/friend-update/:id" render={props => (
          <FriendToUpdate {...props} friends={this.state.friends} updateFriend={this.updateFriend}/>
        )}
        />
      </div>
    );
  }
}

export default App;
