import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link to="/friends">
        <button>Friends List</button>
      </Link>
      <Link to="/add">
        <button>Add Friend</button>
      </Link>
    </div>
  )
}

export default Navigation