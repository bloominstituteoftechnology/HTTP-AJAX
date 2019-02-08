import React, { Component } from 'react';
import axios from 'axios';

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Friend List</h1>
        {this.state.friends.map(friend => <p>{friend.name}</p>)};
      </div>
    )
  }
}

export default FriendList;