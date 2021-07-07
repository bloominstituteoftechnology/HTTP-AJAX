import React from "react";
import FriendCard from "./FriendCard";

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
        <FriendCard
          key={friend.id}
          friend={friend}
          unFriend={props.unFriend}
          changeHandler={props.changeHandler}
        />
      ))}
    </div>
  );
};

export default FriendsList;
