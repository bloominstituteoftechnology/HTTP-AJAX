import React, { Component } from 'react';

function FriendDetails({ friend }) {
  const { name, age, email } = friend;
  return (
    <div className="friend-card">
      <h2>{name}</h2>
      <div className="name">
        Name: <em>{name}</em>
      </div>
      <div className="age">
        Age: <strong>{age}</strong>
      </div>
      <div className="email">
        Email: <strong>{email}</strong>
      </div>
    </div>
  );
}

export default FriendDetails;