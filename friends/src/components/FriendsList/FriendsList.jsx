import React from 'react'
import PropTypes from 'prop-types'
import Friend from '../Friend'

const FriendsList = ({ friends }) => (
  <div className='List'>
    {friends.map(person => <Friend {...person} key={person.id} />)}
  </div>
)

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
}
export default FriendsList
