import React from 'react'
import'./friendly.css';
import PropTypes from 'prop-types';

const Friend = props => {
    return (
        <div>
            {props.newFriend.name}
            {props.newFriend.age}
            {props.newFriend.email} 
        </div>
    );
}

export default Friend;

Friend.propTypes = { 
    newFriend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
})
}