import React from 'react';
import PropTypes from 'prop-types';

const FriendsList = (props) =>{
    return (
        props.friends.map(friend=>{
            return (
                <div key={friend.id}>
                    <div>{friend.name}</div>
                    <div>{friend.age}</div>
                    <div>{friend.email}</div>
                </div>
            )
        })
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            age: PropTypes.number,
            email: PropTypes.string
        })
    )
}

export default FriendsList;