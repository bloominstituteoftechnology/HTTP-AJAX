import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FriendsList extends Component {
  constructor() {
    super();
    this.state= {
      friends: [],
    }
  }
 
  
  render() {
    return (
      <div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{friend.age}</div>
                <div className="friend-email">{friend.email}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() { // when mounted axios gets calls localhost
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(err => console.log(err))
   }
}

export default FriendsList;
