import React from "react";
import './friends.css';
 const Friend = props => {
  return (
    <div className="friendCard">
      <h2>{props.data.name}</h2>
      <p>Age: {props.data.age}</p>
      <p>Email: {props.data.email}</p>
    </div>
  );
};
 export default Friend;