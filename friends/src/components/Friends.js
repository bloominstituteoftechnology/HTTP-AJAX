import React, { Component } from 'react';

const Friends = props => {
  return (
    <div className="friendCard">



      <h2>Name:{props.allFriendsList.name}</h2>
      <h4>Age:{props.allFriendsList.age}</h4>
      <p>Email:{props.allFriendsList.email}</p>
      <p>Id:{props.allFriendsList.id}
      </p>
    </div>
  );
};

export default Friends;


