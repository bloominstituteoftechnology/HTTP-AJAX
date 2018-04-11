import React from "react";

const FriendForm = props => {
  return (
    <form className="form" onSubmit={props.addFriend}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={props.handleInputChange}
        value={props.name}
        required
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={props.handleInputChange}
        value={props.age}
        required
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={props.handleInputChange}
        value={props.email}
        required
      />
      <button className="button" type="submit">
        Add Friend
      </button>
    </form>
  );
};

export default FriendForm;
