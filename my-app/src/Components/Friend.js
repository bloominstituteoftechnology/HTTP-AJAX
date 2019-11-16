import React from 'react'
import { Link } from 'react-router-dom'
const Friend = (props) => {
  console.log('in Friend')
  return (
    <div>
      <Link to={`/friends/${props.friendId}`}>
        <h2> {`hello ${props.friend.name}`}</h2>
      </Link>
    </div>
  )
}

export default Friend
