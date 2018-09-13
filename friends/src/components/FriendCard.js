import React, { Fragment } from "react";

function FriendCard(props) {
  const friend = props.friends.find(
    friend => friend.id == parseInt(props.match.params.friendId, 10)
  );
  return (
    <div className="friend-card">
    <h1>{friend.name}</h1>
    <p>Age: {friend.age}</p>
    <p>Email: {friend.email}</p>
    <button>Update Information</button>
    <button onClick={() => props.handleDelete(friend.id)}>Delete Friend</button>
    </div>
  )}

export default FriendCard;
