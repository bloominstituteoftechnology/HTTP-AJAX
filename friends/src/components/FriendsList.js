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
            return <Friend data = {friend} key = {friend.email}/>
        })}
        </div>

        <form className = 'new-friend-form'>
                <h4>Add New Friend</h4>
                <input type='text' placeholder  = 'name'></input>
                <input type = 'text' placeholder = 'age'></input>
                <input type = 'email' placeholder = 'email'></input>
                <button type = 'submit'>Add Friend</button>
            </form>

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