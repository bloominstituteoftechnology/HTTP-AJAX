import React from 'react';
import "./friend.css";

const Friend = (props) => {

  return ( 
    <div className="friend">
      <h1>{props.friend.name}</h1>
      <div>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
      </div>
    </div>
  );

}
 
export default Friend;