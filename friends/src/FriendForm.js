import React from 'react';
const FriendForm = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="friend name"
        onChange={props.handleFriendChange}
        // onchange handles as you type in each character
        name="name"
        value={props.name}
      />
      <input
        type="text"
        placeholder="friend age"
        onChange={props.handleFriendChange}
        name="age"
        value={props.age}
      />
      <input
        type="text"
        placeholder="friend email"
        onChange={props.handleFriendChange}
        name="email"
        value={props.email}
      />
      <button onClick={props.handleSubmit}>Add New Friend</button>
    </div>
  );
};
//name in input fields refers to the handleFriendChange from app.js
export default FriendForm;
