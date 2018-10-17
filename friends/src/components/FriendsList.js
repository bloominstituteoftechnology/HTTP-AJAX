import React from "react";

const FriendsList = props => {
  return (
    <div
      style={{
        display: "flex",
        width: "84%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "0 auto"
      }}
    >
      {props.friends.map(friend => (
        <div
          key={friend.id}
          style={{
            border: "red solid 1px",
            width: "250px",
            margin: "10px auto",
            paddingBottom: "10px"
          }}
        >
          <h4> {friend.name}</h4> <p>age: {friend.age}</p>
          <p>email: {friend.email}</p>{" "}
          <button id={friend.id} onClick={props.unFriend}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
