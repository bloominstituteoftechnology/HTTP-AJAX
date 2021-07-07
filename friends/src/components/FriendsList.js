import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';
import './Friends.css';

const FriendsList = (props) => {
    return (
        <div>
            <h1>Friends List</h1>
        <div className = 'friend-card-container'>
        {props.list.map(friend => {
            return <Friend data = {friend} key = {friend.id}/>
        })}
        </div>
        </div>
    );
}

FriendsList.propTypes = {
    list : PropTypes.arrayOf(PropTypes.shape({
        name : PropTypes.string,
        age : PropTypes.number,
        email : PropTypes.string
    }))
}

export default FriendsList;