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
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h2 className="friend-title">Lambda Friends</h2>
        <form className="friendForm" onSubmit={this.handleSubmit}>
          <label htmlFor="input-name">Name</label>
          <input type="text" id="input-name" />
          <label htmlFor="input-age">Age</label>
          <input type="number" id="input-age" />
          <label htmlFor="input-email">Email</label>
          <input type="email" id="input-email" />
          <input type="submit" value="Submit" />
        </form>
        <ul className="friend-card">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <p className="friend-name">{friend.name}</p>
                <p className="friend-age">{`Age: ${friend.age}`}</p>
                <p className="friend-email">{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;