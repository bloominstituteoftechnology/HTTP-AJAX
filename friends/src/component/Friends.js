import React from 'react';
import PropTypes from 'prop-types';

const Friends = (props) => {
    return (
        <div>
            <h2>Hello.  My name is {props.friend.name}</h2>
            <h4>My email is {props.friend.email}.</h4>
            <h4>I am {props.friend.age} years old.</h4>
            <p style ={{cursor: 'pointer'}} onClick={props.deleteFriend(props.id)}>x</p>
        </div>
    )
}

Friends.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

export default Friends;