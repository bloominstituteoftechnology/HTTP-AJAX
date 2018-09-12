// React
import React, { Fragment } from 'react';

// Components
import Friend from './Friend';

const FriendsList = (props) => {
    return(
        <Fragment>
            { props.friends.map(friend => <Friend key = { friend.id } friend = { friend } />) }
        </Fragment>
    );
}

export default FriendsList;
