import React from 'react';

const FriendInfo = props => {
    return (
      <div className="main-display">
        {props.props.map(friend => (
          <div key={friend.id} className="friend-display">
          <h3 className="friend-name">{friend.name}</h3>
          <h5>age: {friend.age}</h5>
          <p>email: {friend.email}</p>
          </div>
        ))}
      </div>
    )
  }

  export default FriendInfo;