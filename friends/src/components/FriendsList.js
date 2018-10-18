import React from 'react';
import axios from 'axios';

import Friend from './Friend';
import NewFriend from './NewFriend';

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(friends => this.setState({ friends: friends.data }))
      .catch(error => console.log(error));
  }

  changeHandler = e => this.setState(
    [e.target.name]: e.target.value
  );


  addNewFriend = () => {
    const newFriend = { name: this.state.newFriend.name, age: this.state.newFriend.age, email: this.state.newFriend.email };
  }

  render() {
    console.log(this.state.friends)
    return (
      <div className='friend-list'>
        {this.state.friends.map(friend => <Friend name={friend.name} age={friend.age} email={friend.email} key={friend.id} />)}
        <NewFriend newFriend={this.state.newFriend} changeHandler={this.changeHandler} addNewFriend={this.addNewFriend} />
      </div>
    );
  };
};

export default FriendsList;