// React
import React, { Fragment } from 'react';

// Components
import Friend from './Friend';

// Dependencies
import PropTypes from 'prop-types';

const FriendsList = (props) => {
    return(
        <Fragment>
            { props.friends.map(friend => <Friend key = { friend.id } friend = { friend } />) }
        </Fragment>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    }))
}

export default FriendsList;
