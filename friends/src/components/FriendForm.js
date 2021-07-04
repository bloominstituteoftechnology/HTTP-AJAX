import React from 'react';

const FriendForm = (props) => {
  return (
    <form onSubmit={props.submitFriend}>
      <label>Name:</label>
      <input type='text' name='name' placeholder='Name...' value={props.newFriendName} onChange={props.valueAdd} />

      <label>Age:</label>
      <input type='number' name='age' placeholder='Age...' value={props.newFriendAge} onChange={props.valueAdd} />

      <label>Email:</label>
      <input type='email'name='email' placeholder='Email...' value={props.newFriendEmail} onChange={props.valueAdd} />

      <button type='submit'>Submit New Friend</button>
    </form>
  )
}

export default FriendForm;
