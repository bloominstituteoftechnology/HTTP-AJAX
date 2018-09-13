import React from "react";

const FriendForm = props => {
  return (
    <form name="form">
      Name:
      <input
        onChange={props.handleChange}
        name="name"
        type="text"
        value={props.newFriend.name}
      />
      Age:
      <input
        onChange={props.handleChange}
        name="age"
        type="number"
        value={props.newFriend.age}
      />
      Email:
      <input
        onChange={props.handleChange}
        name="email"
        type="text"
        value={props.newFriend.email}
      />
      <button onClick={event => props.addNewFriend(event)}>Submit!</button>
    </form>
  );
};

export default FriendForm;
