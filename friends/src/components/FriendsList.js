import React from "react";

const FriendsList = props => {
  console.log(props.friends);
  return (
    <div className="friendslist" onClick={() => props.onClick()}>
      {props.friends.map(friend => (
        <div className="friend-card" key={friend.id}>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button id={friend.id} onClick={props.delete}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
