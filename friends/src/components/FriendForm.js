import React from "react";

const FriendForm = props => {
  console.log(props);
  return (
    <div className="friend-form">
      <h2>Add A New Friend</h2>
      <form onSubmit={props.addFriend}>
        <input
          placeholder="Friend's Name"
          onChange={props.changeHandler}
          type="text"
        />
        <input placeholder="Age" onChange={props.changeHandler} type="number" />
        <input placeholder="Email" onChange={props.changeHandler} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
