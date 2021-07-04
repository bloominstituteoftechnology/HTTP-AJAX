import React from 'react';

import './friend.css';

const Friend = ({ friend }) => {
  const { id, name, age, email } = friend;
  
  return (
    <ul className='friend-list-wrapper__friend-list'>
      <li className='friend-list__item' >{ id }</li>
      <li className='friend-list__item' >{ name }</li>
      <li className='friend-list__item' >{ age }</li>
      <li className='friend-list__item' >{ email }</li>
    </ul>
  )
}

export default Friend;