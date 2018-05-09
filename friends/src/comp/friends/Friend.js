import React from 'react';

const Friend = ({ friend }) => {
  const { id, name, age, email } = friend;
  
  return (
    <ul>
      <li>{ id }</li>
      <li>{ name }</li>
      <li>{ age }</li>
      <li>{ email }</li>
    </ul>
  )
}

export default Friend;