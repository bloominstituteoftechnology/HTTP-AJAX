import React from 'react';

const FriendForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={props.friend.name}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        value={props.friend.age}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={props.friend.email}
        onChange={props.handleChange}
      />
      <button onClick={props.handleSubmit}>Add Friend</button>
    </form>
  );
};

export default FriendForm;
