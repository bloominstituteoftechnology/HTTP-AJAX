import React from "react";
import '../App.css';

const FriendsList = props => {
   
  return (
    <div className={props.formClass} onClick={() => props.clickHandler(props.keyIndex)} >
        <h4  className="header friend-header">{props.name}</h4>
        <ol className="friend-data">
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
          <li>Email: {props.email}</li>
          <li>Index: {props.keyIndex}</li>
        </ol>  
    </div>
  );
};

export default FriendsList;