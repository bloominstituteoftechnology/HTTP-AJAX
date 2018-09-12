import React from 'react';
 
function Friend(props) {
    return (
      <div className="friend-card">
        <h3>Name: {props.friend.name}</h3>
        <p>Birth Year: {props.friend.age}</p> 
        <p>Eye Color: {props.friend.email}</p>
      </div> 
    );
};
 export default Friend;