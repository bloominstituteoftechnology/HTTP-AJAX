import React, { Component} from 'react';
import axios from 'axios';

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios 
    .get('http://localhost:5000/friends')
    .then(response =>{
      console.log(response);
     this.setState({friends: response.data})
    })
    .catch(err => {
      console.log(err);
    });

  }
  render() {
    return (
      <div className="friends-list">
      <h1>Friends</h1>
      {this.state.friends.map(friend => (
        <div className="friend-card" key ={friend.id}>
          <h2> Name: {friend.name}; </h2>
          <h2> Age: {friend.age}; </h2>
          <h2> Email: {friend.email}; </h2>
        </div>
      ))}
    </div>
    );
  }
}

export default FriendsList;
