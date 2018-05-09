import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Friends = ({ friends, handleDelete }) => 
  <div>
    <div>Friends List:</div>
    { friends.map(friend => 
      <div key={friend.id}>
        <div>{friend.name}</div>
        <div>{friend.age}</div>
        <div>{friend.email}</div>
        <Link to={`/edit/${friend.id}`}><button>Edit</button></Link>
        <button onClick={() => handleDelete(friend.id)}>Delete</button>
      </div>
    )}
  </div>

export default Friends;
