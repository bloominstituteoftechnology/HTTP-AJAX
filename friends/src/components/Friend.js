import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function Friend(props) {
  return (
    <div className="friend">
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  )
}

Friend.propTypes = {
  friend: PropTypes.shape({
    age: PropTypes.number,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string
  })
}

export default Friend;