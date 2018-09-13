import React from 'react'

const Friends = (props) => {
  return (
    <div>
      {
        props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <h1>{friend.name}</h1>
              <h3>{friend.email || friend.email}</h3>
              <p>{friend.name} is {friend.age} years old.</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Friends
