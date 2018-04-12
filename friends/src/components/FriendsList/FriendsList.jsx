import React from 'react'
import Friend from '../Friend'
export default ({ friends }) => (
  <div className='List'>
    {friends.map(person => <Friend {...person} key={person.id} />)}
  </div>
)
