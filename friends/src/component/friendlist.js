import React from 'react';

const FriendList = (props) => {
 render() {
  return (
    <div className="friend-list">
      {this.state.friends.map(friend => (friend))}
    </div>
    render={props => <Friends {...props} friends={this.state.friends} />}
    )
 };
}

export default FriendList;
