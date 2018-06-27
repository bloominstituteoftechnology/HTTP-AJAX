import React from "react";

const FriendsForm = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <label>name</label>

      <input type="text" name="name" onChange={props.changeInfoHandler} />
      <label>age</label>

      <input type="text" name="age" onChange={props.changeInfoHandler} />
      <label>email</label>
      <input type="text" name="email" onChange={props.changeInfoHandler} />

      <button onClick = {props.addFriendHandler}>Submit</button>
    </form>
  );
};

export default FriendsForm;
