import React from 'react';

const UpdateForm = props => {
  return (
    <form onSubmit={props.saveUpdateFriend}>
      <input
        type="text"
        placeholder="New Name"
        name="name"
        onChange={props.updateFriendHandler}
        value={props.friend.name}
      />
      <input
        type="text"
        placeholder="New Age"
        name="age"
        onChange={props.updateFriendHandler}
        value={props.friend.age}
      />
      <input
        type="text"
        placeholder="New Email"
        name="email"
        onChange={props.updateFriendHandler}
        value={props.friend.email}
      />

      <button type="submit">Save</button>
    </form>
  )
};

export default UpdateForm;