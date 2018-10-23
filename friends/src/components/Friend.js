import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
  return (
    <div>
      <h1> {props.friend.name }</h1>
      <p> {props.friend.age} </p>
      <p> {props.friend.email} </p>

    </div>
  );
};

export default Friend;

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired
};