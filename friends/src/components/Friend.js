import React from 'react';
import './Friend.css';
import PropTypes from "prop-types";

const Friend = props => {
    return (
        <div className='friend-card'>
            <span>{props.friend.name}</span>
            <span>{props.friend.age}</span>
            <span>{props.friend.email}</span>
        </div>
    )

}

Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,

}
    
export default Friend;
