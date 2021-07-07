import React from "react";

const FriendForm = props => {
    
  return (
    <form onSubmit={props.submitHandler} className={props.display ? '':'none'}>
      <input
        name="name"
        type="text"
        placeholder="name"
        value={props.newFriend.name}
        onChange={props.changeHandler}
      />
      <input
        name="email"
        type="email"
        placeholder="email@website.com"
        value={props.newFriend.email}
        onChange={props.changeHandler}
      />
      <input
        name="age"
        type="number"
        placeholder="age"
        value={props.newFriend.age}
        onChange={props.changeHandler}
      />
      <button type="submit" style={{ display: "none" }}>
      </button>
    </form>
  );
};

export default FriendForm;
