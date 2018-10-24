import React from 'react';
import PropTypes from 'prop-types';

const FriendsList = (props) =>{
    return (
        props.friends.map(friend=>{
            return (
                <div key={friend.id}>
                    {/* TODO: change to link and allow update delete when selected */}
                    <div>{friend.name}</div>
                    <div>{friend.age}</div>
                    <div>{friend.email}</div>
                    {/* TODO: this should only render when individual friend has been selected */}
                    <div>Temp Update/Delete Menu</div>
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