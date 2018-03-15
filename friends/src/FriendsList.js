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

  onSubmit = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>

        <NewFriend onSubmit={this.onSubmit} />
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <button
                  className="delete-btn"
                  onClick={() => this.deleteFriend(friend.id)}
                >
                  Delete
                </button>
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
