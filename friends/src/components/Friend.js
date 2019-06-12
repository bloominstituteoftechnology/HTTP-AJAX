import React from 'react';

const Friend = props => (
      <div className="friend-details">
        <p><strong>Name:</strong><br/> {props.friend.name}</p>
        <p><strong>Age:</strong><br/>  {props.friend.age}</p>
        <p><strong>E-Mail:</strong><br/>  {props.friend.email}</p>
      </div>
    );
    
export default Friend;