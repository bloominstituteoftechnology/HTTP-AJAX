import React from 'react';
import './Friends.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    return (
        <div>
            <Link to={`/friends/${props.friend.id}`}>{props.friend.name}</Link>
        </div>
    )
};

Friends.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    // age: PropTypes.number,
    email: PropTypes.string
  })
};

export default Friends;
