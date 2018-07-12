import React from 'react';
const FriendForm = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="friend name"
        onChange={props.handleNameChange}
        name="friend"
        value={props.friend}
      />
      <button onClick={props.handleSubmit}>Add New Friend</button>
    </div>
  );
};

export default FriendForm;
