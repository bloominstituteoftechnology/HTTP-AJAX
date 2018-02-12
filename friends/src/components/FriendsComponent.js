import React, { Component } from 'react';
import axios from 'axios';

import Form from './FormComponent';

class Friends extends Component {
  state = {
    friends: [],
  };


  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <Form />
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
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      const friends = response.data;
      this.setState({friends: friends});
    })

    .catch((error) => {
      console.log('there was an error', error);
    });

    axios.post('http://localhost:5000/friends', {
      name: '',
      age: '',
      email: ''
    })
    .then((newFriend) => {
      newFriend = newFriend.data;
      this.setState({friends: this.push(newFriend)});
    })
    .catch((error) => {
      console.log('there was an error', error);
    })
  }
}


export default Friends;