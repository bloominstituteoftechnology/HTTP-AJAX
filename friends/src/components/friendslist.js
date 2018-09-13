import React from 'react';
import PropTypes from 'prop-types';
import Friend from './friend';

function FriendsList(props) {
    return props.friends.map( (friend) => 
        <Friend 
            friend={friend} 
            putFriend={props.putFriend} 
            deleteFriend={props.deleteFriend} 
            key={friend.id} 
        /> 
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            age: PropTypes.number,
            email: PropTypes.string
        })
    ).isRequired,
    handleEdit: PropTypes.func,
    deleteFriend: PropTypes.func
};

export default FriendsList;
