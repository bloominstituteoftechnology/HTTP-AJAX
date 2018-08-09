import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';
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

  removeFriend = e => {
    axios
      .delete(`http://localhost:5000/friends/${e}`)
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <ul className="friend-list">
      {this.state.friends.map(friend => <FriendCard key={friend.id} friend={friend} removeHandler={this.removeFriend}/>)}
      <Link to="/add_friend"><li className="friend-card add-friend"> <p>Add/Update Friend</p></li></Link>
      </ul>
    );
  }
}

export default FriendList;
