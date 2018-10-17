import React from 'react';

const Friend = ({ friend }) => (
  <li className="friend">
    <h2 className="name">{friend.name}</h2>
    <div className="age">{friend.age}</div>
    <div className="email">{friend.email}</div>
  </li>
);

export default Friend;
