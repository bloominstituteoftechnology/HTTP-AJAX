import React from "react";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div
          key={friend.id}
          style={{
            border: "red solid 1px",
            width: "100px",
            margin: "10px auto"
          }}
        >
          {" "}
          <h4> {friend.name}</h4> <button id={friend.id} onClick={props.unFriend}>X</button>{" "}
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
