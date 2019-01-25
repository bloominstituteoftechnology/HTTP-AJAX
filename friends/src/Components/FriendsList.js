import React from "react";
import LinkButton from "./LinkButton";
import Friend from "./Friend";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        return (
          <Link to={`/${friend.id}`} key={friend.id}>
            <Friend
              id={friend.id}
              friend={friend}
              {...props}
              deleteFriend={props.deleteFriend}
            />
          </Link>
        );
      })}
      <LinkButton to={"/addfriend"}>Add Friend</LinkButton>
    </div>
  );
};

export default FriendsList;
