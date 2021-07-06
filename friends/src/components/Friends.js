import React from 'react'

function Friends(props) {
  return (
    <div className="friends">
    {props.friends.map(friend => (
      <div className="friend" key={friend.id}>
        <h3>{friend.name}</h3>
        <h6>{friend.age}</h6>
        <h6>{friend.email}</h6>
        <button onClick={ () => props.deleteFriendFromServer(friend.id) }>Delete</button>
        <button onClick={ () => props.updateFriendFromServer(friend) }>Update</button>

      </div>
    ))}
    </div>
  )
}

export default Friends;