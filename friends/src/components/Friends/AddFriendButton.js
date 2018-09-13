import React from 'react';
import Proptypes from "prop-types";

function AddFriendButton(props) {
  
     return (
      <div className="Friends">
        <form>
          <label>Name:</label>
          <input type="text" name="name" required value={props.friend.name} onChange={props.handleChange} ></input>
          <label>Age:</label>
          <input type="number" className="age-input" name="age" required value={props.friend.age} onChange={props.handleChange}></input>
          <label>Email:</label>
          <input type="text" name="email" required value={props.friend.email} onChange={props.handleChange}></input>
          <button onClick={props.addFriend}>Add Friend</button>
        </form>
      </div>
    );
  
}

AddFriendButton.Proptypes = {
  friend: Proptypes.shape({
    id: Proptypes.number,
    name: Proptypes.string,
    age: Proptypes.number,
    email: Proptypes.string,
  }),
  newFriend: Proptypes.func,
  handleChange:Proptypes.func,
  addFriend: Proptypes.func,
}


export default AddFriendButton;