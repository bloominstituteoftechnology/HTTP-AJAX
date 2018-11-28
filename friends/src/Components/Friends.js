import React from "react";

const Friends = props => {
  return props.friends.map(friend => (
    <div key={friend.id} className="card">
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  ));
};

export default Friends;
