import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
    return (
        <li>Name: {props.friend.name}, Age: {props.friend.age}, Email: {props.friend.email}</li>
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        age: PropTypes.number.isRequired,
        name: PropTypes.string,
        email: PropTypes.string
    })
}

export default Friend;