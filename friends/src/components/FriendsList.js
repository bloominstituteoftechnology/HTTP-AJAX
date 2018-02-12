import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends: []
  };
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log('there was an error', error);
    });
  }
  render() {
    return (
      <div>
        <h2 className="friend-title">Lambda Friends</h2>
        <ul className="friend-card">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <p className="friend-name">{friend.name}</p>
                <p className="friend-age">{`Age: ${friend.age}`}</p>
                <p className="friend-email">{`Email: ${friend.name}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
