import React from 'react';

function Friends(props) {
  
     return (
      <ul className="App">
        {props.friends.map(friend => <li><strong>Name:</strong> {friend.name} <strong>Age:</strong> {friend.age} <strong>Email:</strong> {friend.email}</li>)}
      </ul>
    );
  
}

export default Friends;
