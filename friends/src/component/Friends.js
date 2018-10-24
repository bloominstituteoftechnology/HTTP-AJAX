import React from 'react';
import PropTypes from 'prop-types';

const Friends = (props) => {
    return (
        <div>
            <h2>Hello.  My name is {props.friend.name}</h2>
            <h4>My email is {props.friend.email}.</h4>
            <h4>I am {props.friend.age} years old.</h4>
        </div>
    )
}

Friends.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
  };
  
export default Friends;