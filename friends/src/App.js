import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friends from './components/friends';
import FriendForm from './components/FriendForm';
import { Friend } from './components/Friend';

const API = 'http://localhost:5000';

export default class App extends Component {
  state = {
    friends: [],
    error: '',
    ready: false,
    id: '',
    name: '',
    age: Number,
    email: '',
  };

  componentDidMount() {
    axios.get(`${API}/friends`).then(res => {
      const friends = res.data;
      this.setState({ friends });
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async e => {
    const friend = this.state;
    delete friend.friends;
    e.preventDefault();
    if (friend.name !== '' && friend.email !== '' && friend.age !== '')
      await axios
        .post(`${API}/friends`, friend)
        .then(res => console.log('success'))
        .catch(error => new Error(error));
  };

  deleteFriend = event => {
    event.preventDefault();
    axios.delete(`${API}/friends/${event.target.value}`);
  };

  render() {
    const { friends, error } = this.state;
    return (
      <div className="App container">
        <Route path="/" exact>
          <FriendForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Friends
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
        </Route>
        <Route
          path="/friends/:id"
          component={Friend}
          props={this.addToSavedList}
        />
      </div>
    );
  }
}
