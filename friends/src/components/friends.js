import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [] 
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  render() {
    return (
    <div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>;
          })}
        </ul>
        </div>
    )};
}