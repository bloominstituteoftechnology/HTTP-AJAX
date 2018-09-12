import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

import Friend from './Friend'

function Display(props) {
  return (
    <div className="container">
      <h1>My Friends</h1>
      <div className="friends"> 
      {props.friends.map(friend => {
        return <Friend friend={friend} key={friend.id}/>
      })}
    </div>
    </div>
    
  )
}

Display.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

export default Display;