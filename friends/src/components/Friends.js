import React from 'react'

function Friends(props) {
  return (
    <div className="friends">
    {props.friends.map(friend => (
      <div className="friend" key={friend.id}>
        <h3>{friend.name}</h3>
        <h6>{friend.age}</h6>
        <h6>{friend.email}</h6>
      </div>
    ))}
    </div>
  )
}

export default Friends;