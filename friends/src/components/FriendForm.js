import React from 'react';

const FriendForm = (props) => {
  return (
    <form onSubmit={props.submitFriend}>
      <label>Name:</label>
      <input type='text' placeholder='Name...' value={props.newFriendName} onChange={props.nameAdd} />

      <label>Age:</label>
      <input type='number' placeholder='Age...' value={props.newFriendAge} onChange={props.ageAdd} />

      <label>Email:</label>
      <input type='email' placeholder='Email...' value={props.newFriendEmail} onChange={props.emailAdd} />

      <button type='submit'>Submit New Friend</button>
    </form>
  )
}

export default FriendForm;
