import React from 'react';

const FriendsForm = props => {
  return(
    <form id="friendForm">
      <input name="friendName" type="text" placeholder="Name" onChange={props.onFriendChange} />
      <input name="friendAge" type="number" placeholder="Age" onChange={props.onFriendChange} />
      <input name="friendEmail" type="email" placeholder="Email" onChange={props.onFriendChange} />
    </form>
  )
}

export default FriendsForm;
