import React from 'react';
import { Link } from 'react-router-dom';

const FriendsForm = props => {
  return(
    <form>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" onChange={props.onFriendChange} />
      <label htmlFor="age">Age</label>
      <input name="age" type="number" onChange={props.onFriendChange} />
      <label htmlFor="email">Email</label>
      <input name="email" type="email" onChange={props.onFriendChange} />
      <button onClick={props.onSubmitFriend}>Submit</button>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default FriendsForm;
