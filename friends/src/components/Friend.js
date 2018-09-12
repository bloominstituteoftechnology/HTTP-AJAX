import React from 'react'
import PropTypes from 'prop-types'

const Friend = (props) => {
  return (
    <div>
      <h1>{props.friend.name}</h1>
      <h3>{props.friend.email}</h3>
      <p>{props.friend.name} is {props.friend.age} years old.</p>
    </div>
  )
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    id: PropTypes.number,
  })
}

export default Friend