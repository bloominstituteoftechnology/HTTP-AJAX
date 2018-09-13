import React from 'react'
import PropTypes from 'prop-types'

const Friend = (props) => {
  const friend = props.friends.find(friend => Number(friend.id) === Number(props.match.params.id))
  const newFriend = {...friend}

  return (
    <div>
      <h1>{newFriend.name}</h1>
      <h3>{newFriend.email}</h3>
      <p>{newFriend.name} is {newFriend.age} years old.</p>
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
