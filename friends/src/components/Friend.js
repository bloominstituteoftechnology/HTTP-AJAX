import React from 'react'
import PropTypes from 'prop-types'

const Friend = (props) => {
  const friend = props.friends.find(friend => Number(friend.id) === Number(props.match.params.id))
  const newFriend = {...friend}
  const id = props.match.params.id

  return (
    <div>
      <h1>{newFriend.name}</h1>
      <h3>{newFriend.email}</h3>
      <p>{newFriend.name} is {newFriend.age} years old.</p>

      <button onClick={() => props.deleteFriend(id)}>Delete Friend</button>
    </div>
  )
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    id: PropTypes.number,
  }),
  deleteFriend: PropTypes.func
}

export default Friend
