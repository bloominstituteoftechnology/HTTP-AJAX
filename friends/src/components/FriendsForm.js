import React from "react";
import "./Friends.css";

const FriendsForm = props => {
  const handleEditClick = e => {
    e.preventDefault();
    if (props.isEditing) {
      props.editFriend();
    } else {
      props.addNewFriend();
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleEditClick}>
        <input
          type="text"
          placeholder="Friend's Name"
          value={props.newFriend.name}
          onChange={props.handleNewFriends}
          name="name"
          required
        />
        <input
          type="text"
          placeholder="Friend's Age"
          value={props.newFriend.age}
          onChange={props.handleNewFriends}
          name="age"
          required
        />
        <input
          type="text"
          placeholder="Friend's Email"
          value={props.newFriend.email}
          onChange={props.handleNewFriends}
          name="email"
          required
        />
        <input
          type="submit"
          value={props.isEditing ? "Update Friend" : "Add new Friend"}
          id="submit"
        />
      </form>
    </div>
  );
};

export default FriendsForm;
