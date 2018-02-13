import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends: [],
    loading: true,
    noData: true,
  };

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        {this.state.loading && <div>Loading Friends...</div>}

        {!this.state.loading && (
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
        )}
      </div>
    );
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log('there was error', error);
      });
  }
}

export default FriendsList;

// http://localhost:6000/friends
