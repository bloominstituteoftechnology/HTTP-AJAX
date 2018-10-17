import React from 'react'
import axios from 'axios';

import Friend from './Friend'

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(friends => this.setState({ friends: friends.data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.friends)
    return (
      <div className='friend-list'>
        {this.state.friends.map(friend => <Friend name={friend.name} age={friend.age} email={friend.email} key={friend.id}/>)}
      </div>
    );
  };
};

export default FriendsList;