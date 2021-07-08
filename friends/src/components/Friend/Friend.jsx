import React from 'react'
import PropTypes from 'prop-types'
import { makeDelete } from '../../utils'

const del = makeDelete('http://localhost:5000')

const Friend = ({ name, email, age, id }) => (
  <div className='Friend'>
    <h3 className='Friend--name'>{name}</h3>
    <p className='Friend--age'>{age}</p>
    <p className='Friend--email'>{email}</p>
    <img
      alt='avatar'
      className='Friend--avi'
      src={`https://api.adorable.io/avatars/200/${email}.png`}
    />
    <button
      className='Friend--delete'
      onClick={() => {
        del('/friends', id)
        // TODO
        // Make this reload after a delete
      }}
    >
      X
    </button>
  </div>
)

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}

export default Friend
