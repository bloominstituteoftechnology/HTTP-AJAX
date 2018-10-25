import React from 'react';

export default function ListFriends(props) {
  return (
    <div>
      {props.friends.map(friend => {
        return(
          <div key={friend.id}>
            <h1>This friend is named {friend.name}</h1>
            <h3>Their age is {friend.age}</h3>
            <h3>Their email is: {friend.email}</h3>
            <div onClick={ () => props.deleteFriend(friend.id)}>Delete</div>
          </div>
        )
      })}
    </div>
  )
}