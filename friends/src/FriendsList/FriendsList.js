import React, { Component } from 'react';

class FriendsList extends Component {
  render() {
    return (
      <div>
        {this.props.friends.map(friend => {
          return <div key={friend.id}>
              <div>{friend.name}</div>
          <div>{friend.age}</div>
          <div>{friend.email}</div>
          </div>
        })}
      </div>
    );
  }
}

export default FriendsList;
