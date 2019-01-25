import React from "react";
import LinkButton from "./LinkButton";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            id={friend.id}
            friend={friend}
            {...props}
            deleteFriend={props.deleteFriend}
          />
        );
      })}
      <LinkButton to={"/addfriend"}>Add Friend</LinkButton>
    </div>
  );
};

export default FriendsList;
