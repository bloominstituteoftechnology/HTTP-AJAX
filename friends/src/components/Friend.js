import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
  return (
    <div>
      <h3>Name: {props.friend.name}</h3>
      <h4>Age: {props.friend.age}</h4>
      <h5>Email: {props.friend.email}</h5>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  }),
};

export default Friend;
