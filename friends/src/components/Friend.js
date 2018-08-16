import React from "react";
import "../App.css";
import { Table } from "reactstrap";

const Friend = props => {
  return (
    <div>
      <div className="friend-container">
        <span className="name">{props.friends.name}</span>{" "}
        <span className="age">{props.friends.age}</span>{" "}
        <span className="email">{props.friends.email}</span>
      </div>
    </div>
  );
};

export default Friend;
