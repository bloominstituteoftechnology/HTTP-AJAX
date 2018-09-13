import React from 'react';
import PropTypes from 'prop-types';

import Friend from './Friend';

function FriendList(props) {
    return (
        <div>
            <h2>Friend List</h2>
            {props.friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
};

export default FriendList;