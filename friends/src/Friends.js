import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
  state = {
    friendList: [],
    newFriendName: '',
    newFriendAge: 0,
    newFriendEmail: '',
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.friendList.map(friend => {
            return(
              <li>
                <div>Name: {friend.name}</div>
                <div>Age: {friend.age}</div>
                <div>E-mail: {friend.email}</div>
              </li>
            );
          })}
          <li>
            <form onSubmit={this.submitFriend}>
              <input type="text" value={this.state.newFriendName} placeholder="Name"/>
              <input type="text" value={this.state.newFriendAge} placeholder="Age"/>
              <input type="text" value={this.state.newFriendEmail} placeholder="Email"/>
              <button type="submit">Add Friend</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }

  submitFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.newFriendName,
      age: this.state.newFriendAge,
      email: this.state.newFriendEmail,
    };

    const newFriendList = [...this.state.friendList, newFriend];

    this.setState({ friendList: newFriend, newFriendName: '', newFriendAge: 0, newFriendEmail: ''});
  };
}

export default Friends;
