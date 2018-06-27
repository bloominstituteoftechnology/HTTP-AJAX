import React from 'react';

const FriendsForm = props => {
  return(
    <form>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" onChange={props.onFriendChange} />
      <label htmlFor="age">Age</label>
      <input name="age" type="number" onChange={props.onFriendChange} />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" onChange={props.onFriendChange} />
      <button onClick={props.onSubmitFriend}>Add Friend</button>
    </form>
  )
}

export default FriendsForm;
