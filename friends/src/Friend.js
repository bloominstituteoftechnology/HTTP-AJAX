import React from 'react';

function Friend(props) {
  return (
    <form onSubmit={props.deleteFriend(props.friend.id)}>
      <div>Name: {props.friend.name}</div>
      <div>Age: {props.friend.age}</div>
      <div>Email: {props.friend.email}</div>
      <input type='submit' value='Delete' />
      <br></br>
    </form>
  )
}

export default Friend;