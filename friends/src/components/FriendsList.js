import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  console.log(props);
  return (
    <div className="friends-container">
      {props.friends.map(friend => {
        return (
          <Friend
            {...props}
            setUpdateForm={props.setUpdateForm}
            updateFriend={props.updateFriend}
            deleteFriend={props.deleteFriend}
            key={friend.id}
            friends={friend}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
