import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState(() => ({ friends: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  render() {
    return (
      <ul className="friend-list">
      {this.state.friends.map(friend => <li className="friend-card" key={friend.id}>
      <div><p><strong>Name: </strong> {friend.name}<br/> <strong>id: </strong>{friend.id}<br/> <strong>Age: </strong>{friend.age}<br/> <strong>Email: </strong>{friend.email}<br/></p></div>
      <span onClick={this.removeFriend}>X</span></li>)}
      <Link to="/add_friend"><li className="friend-card add-friend"> <p>Add Friend</p></li></Link>
      </ul>
    );
  }
}

export default FriendList;
