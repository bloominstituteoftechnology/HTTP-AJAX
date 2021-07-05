import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
  const { name, age, email } = props.friend;

  return (
    <div className="friend-card">
      <p>
      <strong>Name: </strong>{name}
      </p>

      <p>
      <strong>Age: </strong>{age}
      </p>

      <p>
      <strong>Email: </strong> {email}
      </p>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};

export default Friend;