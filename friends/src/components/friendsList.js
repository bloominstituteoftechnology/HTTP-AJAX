import React from "react";
import '../App.css';

const FriendsList = props => {
   
 
 

  return (
    <div className="friend-list">
        <h1 className="header friend-header">{props.name}</h1>
        <ol className="friend-data">
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
          <li>Email: {props.email}</li>
        </ol>  
    </div>
  );
};

export default FriendsList;