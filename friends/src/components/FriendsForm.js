import React from "react";
import "./Friends.css";

const FriendsForm = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.addNewFriend}>
        <input
          type="text"
          placeholder="Friend's Name"
          value={props.newFriend.name}
          onChange={props.handleNewFriends}
          name="name"
        />
        <input
          type="text"
          placeholder="Friend's Age"
          value={props.newFriend.age}
          onChange={props.handleNewFriends}
          name="age"
        />
        <input
          type="text"
          placeholder="Friend's Email"
          value={props.newFriend.email}
          onChange={props.handleNewFriends}
          name="email"
        />
        <input type="submit" value="Add new Friend" id="submit" />
      </form>
    </div>
  );
};

export default FriendsForm;
