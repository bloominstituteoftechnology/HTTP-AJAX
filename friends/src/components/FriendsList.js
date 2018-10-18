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

  changeHandler = ev => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [ev.target.name]: ev.target.value
      }
    });
  };


  addNewFriend = ev => {
    ev.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.state.newFriend)

    return (
      <div className='friend-list'>
        {this.state.friends.map(friend => <Friend name={friend.name} age={friend.age} email={friend.email} key={friend.id} />)}
        <NewFriend newFriend={this.state.newFriend} changeHandler={this.changeHandler} addNewFriend={this.addNewFriend} />
      </div>
    );
  };
};

export default FriendsList;