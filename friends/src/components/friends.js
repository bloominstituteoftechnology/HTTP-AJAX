import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <div className="friends-list">
        {this.state.friends.map(friend => {
        return (
          <ul key={friend.id} className="friend">
          <li className="friend-name">{friend.name}</li>
          <li className="friend-age">{'Age: ${friend.age'}'}</li>
          <li className="friend-email">{'Email:${friend.email'}</li>
        </ul>
        )

      })}
    </div>
    )
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log('error', error);
      });
  }
}
export default Friends;