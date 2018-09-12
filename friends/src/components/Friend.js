import React from 'react';
 
function Friend(props) {
    return (
      <div className="friend-card">
        <h3>Name: {props.friend.name}</h3>
        <p>Age: {props.friend.age}</p> 
        <p>Email: {props.friend.email}</p>
      </div> 
    );
};
 export default Friend;