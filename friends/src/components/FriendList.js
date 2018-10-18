import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div key={friend.id} className="friend">
          <div className="friend__name">{friend.name}</div>
          <div className="friend__age">is {friend.age} years old.</div>
          <div className="friend__email">{friend.email}</div>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
