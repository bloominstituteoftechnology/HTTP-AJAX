import React from 'react';

import './Friend.css';

function Friend(props) {
  return (
    <form className='new-friend'>
      <div>
        <div className='friend-row'>
          <p>Name</p>
          <p><input type='text' name='name' /></p>
        </div>
        <div className="friend-row">
          <p>Age</p>
          <p><input type="text" name='age' /></p>
        </div>
        <div className="friend-row">
          <p>Email</p>
          <p><input type="text" name='email' /></p>
        </div>
      </div>
      <div className='button-cell'>
        <button type='submit'>ADD</button>
      </div>
    </form>
  )
}

export default Friend;
