import React from 'react';

const FriendForm = (props) => {
  return (
    <form onSubmit={props.submitFriend}>
      <label>Name:</label>
      <input placeholder='Name...' value={props.newFriendName} onChange={props.nameAdd} />

      <label>Age:</label>
      <input placeholder='Age...' value={props.newFriendAge} onChange={props.ageAdd} />

      <label>Email:</label>
      <input placeholder='Email...' value={props.newFriendEmail} onChange={props.emailAdd} />

      <button type='submit'>Submit New Friend</button>
    </form>
  )
}

export default FriendForm;
