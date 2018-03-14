import React, { Component } from 'react';
import axios from 'axios';
import './FriendsList.css';


class FriendsList extends Component {
    state = {
      friends: []
    }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => { this.setState({ friends: response.data }) 
    console.log(this.state.friends)})
    .catch(error => { console.error('Server Error', error) })
  }

  render() {
    return (
      <div>
        <h1 className="list-title">Friends</h1>
        <ul className="friend-list">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id}>
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FriendsList;
