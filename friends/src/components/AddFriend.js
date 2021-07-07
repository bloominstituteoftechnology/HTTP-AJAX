import React from "react";
import { Link } from 'react-router-dom';
import "./AddFriend.css";

const AddFriend = props => {
  return (
    <div className="addfriend-container">
      {props.fieldType === "Add" ? (
        <h2>Add New Friend:</h2>
      ) : (
        <h2>Edit Friend:</h2>
      )}
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={props.onChange}
      />
      <Link to="/">
        <button onClick={props.onClick}>Confirm</button>
      </Link>
    </div>
  );
};

export default AddFriend;
