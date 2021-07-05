import React from "react";

const Friends = props => {
    return props.friends.map(friends => {
    return (
      <div key={friends.id}>
        {friends.id}
        {friends.name}
        {friends.age}
        {friends.email}
      </div>
    );
  });
};

export default Friends;
