import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Portal from './portal';
import Friends from './components/friends/friends';
import FriendsForm from './components/friends/FriendsForm';

class App extends Component {
  constructor() {
    super();
    this.state = { friends: [] };
    this.url = 'http://localhost:5000/friends';
  }

  componentDidMount() {
    this.getFriends(this.url);
  }

  getFriends = URL => {
    axios
      .get(URL)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`${this.url}/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  updateFriends = friends => {
    this.setState({ friends });
  };

  render() {
    return (
      <Fragment>
        <Friends friends={this.state.friends} deleteFriend={this.deleteFriend} />
        <Portal>
          <FriendsForm updateFriends={this.updateFriends} />
        </Portal>
      </Fragment>
    );
  }
}

export default App;
