import React, { Component } from 'react';
import axios from 'axios';
import NewFriend from './NewFriend';

class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }

  // Issue with this function
  onSubmit = friends => {
    this.setState(
      axios
        .post('http://localhost:5000/friends', {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
        .then(response => {
          this.setState({ friends: response.data });
          console.log('Friends did update');
        })
        .catch(error => {
          console.log(`There was an error adding a new friend: ${error}`);
        })
    );
  };

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
        <NewFriend onSubmit={friends => this.onSubmit(friends)} />
      </div>
    );
  }
}

export default FriendsList;
