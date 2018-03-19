import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
    friends: []

  }
}

  render() {
    return (
      <div>
      <div className="title">So Lonely</div>
      <ul className="grid">
      {this.state.friends.map(friend => {
        return (
          <li key={friend.id} className="friend">
           <div className="name">{friend.name}</div>
           <div className="age">{`Age:${friend.age}`}</div>
           <div className="email">{`Email: ${friend.email}`}</div>
           </li>
        );
      })}
      </ul>
    </div>
    );
  }

  componentDidMount() {
  axios.get('http://localhost:5000/friends')
  .then(response => {
    this.setState({ friends: response.data });
  })
  .catch(error => {
    console.log( `There was an error getting friends: ${error}`);
  });
}
}

 export default Friends;
