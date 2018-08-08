import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route, Link } from 'react-router-dom';

import FriendList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

const API_URL = 'http://localhost:5000';
class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/friends`)
      .then(response => this.setState({ friends: response.data }));
  }

  addFriend = data => {
    axios
      .post(`${API_URL}/friends`, data)
      .then(response => this.setState({ friends: response.data }));
  };

  updateFriend = (id, data) => {
    axios
      .put(`${API_URL}/friends/${id}`, data)
      .then(response => this.setState({ friends: response.data }));
  };

  deleteFriend = id => {
    axios
      .delete(`${API_URL}/friends/${id}`)
      .then(response => this.setState({ friends: response.data }));
  };

  render() {
    return (
      <div>
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/friends">Friends</NavLink>
          <NavLink to="/add">Add Friend</NavLink>
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>Friends Manager</h1>
              <Link to="/friends">View your friends</Link>
            </div>
          )}
        />
        <Route
          exact
          path="/friends"
          render={() => (
            <FriendList
              onDelete={this.deleteFriend}
              onUpdate={this.updateFriend}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={props => (
            <FriendsForm
              {...props}
              title="Add new friend"
              onSubmit={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
