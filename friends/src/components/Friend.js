import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
  const { name, age, email } = props.friend;

  return(
    <div className="friend-card">
      <p>
        Name: <em>{name}</em>
      </p>

      <p>
        Age: <strong>{age}</strong>
      </p>

      <p>
        Email: <strong>{email}</strong>
      </p>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.object
};

export default Friend;