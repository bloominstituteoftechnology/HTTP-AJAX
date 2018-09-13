import React, { Fragment } from "react";

function FriendCard(props) {
  const friendId = props.friendId;
  return (
    <Fragment>
    {props.friends.filter(friendId => props.friends.id === friendId)}
    </Fragment>
  )}

export default FriendCard;
