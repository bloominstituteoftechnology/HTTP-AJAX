// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Friend from './Friend';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './FriendsList.css';

const FriendsList = (props) => {
    return(
        <div className = 'friends-list'>
            <Link to = '/postfriend'>Add new friend</Link>
            <Link to = '/'>Go home</Link>

            { props.friends.map(friend => <Link key = { friend.id } to = { `/friendslist/${ friend.id }` }><Friend friend = { friend } /></Link>) }
        </div>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        color: PropTypes.string
    }))
}

export default FriendsList;
