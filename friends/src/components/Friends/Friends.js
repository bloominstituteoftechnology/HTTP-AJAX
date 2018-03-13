import React from 'react';
import './Friends.css';
import PropTypes from 'prop-types';

const Friends = (props) => {
    return (
        <div>
            {props.friend.name}
        </div>
    )
};

Friends.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};

export default Friends;
