import React from 'react';

import './Friend.css';

function Friend(props) {
  return (
    <form className='new-friend' action='submit' onSubmit={(event) => props.addNewFriend(event, props.newFriend)}>
      <div>
        <div className='friend-row'>
          <p>Name</p>
          <p><input type='text' name='name' value={props.name} onChange={(event) => props.changeHandler(event)} /></p>
        </div>
        <div className="friend-row">
          <p>Age</p>
          <p><input type="number" name='age' value={props.age} onChange={(event) => props.changeHandler(event)}/></p>
        </div>
        <div className="friend-row">
          <p>Email</p>
          <p><input type="text" name='email' value={props.email} onChange={(event) => props.changeHandler(event)}/></p>
        </div>
      </div>
      <div className='button-cell'>
        <button type='submit'>ADD</button>
      </div>
    </form>
  )
}

export default Friend;
