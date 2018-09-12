import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <p>{`Age: ${props.friend.age}`}</p>
            <p><a href={`mailto:${props.friend.email}`}>{props.friend.email}</a></p>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
};

export default Friend;
