import React from "react";
import "./FriendsList.css";

function FriendsList(props) {
  console.log(props.friends);

  return (
    <div className="friends-wrapper">
      {props.friends.map(friend => (
        <div className="friends-card" key={friend.id}>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h2>{friend.email}</h2>
          <button
            className="update-friend"
            onClick={() =>
              props.update(
                friend.id,
                "friend.name",
                "friend.age",
                "friend.email"
              )
            }
          >
            Update
          </button>
        </div>
      ))}
      <div className="update" />
    </div>
  );
}

export default FriendsList;
