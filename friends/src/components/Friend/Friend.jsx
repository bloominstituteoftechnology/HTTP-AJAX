import React from 'react'
import PropTypes from 'prop-types'

const Friend = ({ name, email, age }) => (
  <div className='Friend'>
    <p className='Friend--blurb'>
      My name is {name}. I am {age} years old and my email is {email}
    </p>
  </div>
)

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Friend
