import React from 'react'
import { Link, Route } from 'react-router-dom'
import Friend from './Friend'

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
              <Link to={`${props.match.url}/${friend.id}`}>See Info</Link>

              <Route path={`${props.match.path}/${friend.id}`} render={(props) => <Friend {...props} friends={props.friends} />} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Friends
