// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Friend from './Friend';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './FriendsList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const FriendsList = (props) => {
    return(
        <div className = 'friends-list'>
            <h1>Friends List</h1>

            <div>
                <Link to = '/postfriend'>
                    <Button color = 'primary'>Add New Friend</Button>
                </Link>
                <Link to = '/'>
                    <Button color = 'success'>Go Home</Button>
                </Link>
            </div>

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
    })),
    history: PropTypes.shape({
        length: PropTypes.number,
        action: PropTypes.string,
        location: PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string,
            hash: PropTypes.string,
            key: PropTypes.string,
        }),
        createHref: PropTypes.func,
        push: PropTypes.func
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
    }),
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string,
        isExact: PropTypes.bool
    })
}

export default FriendsList;
