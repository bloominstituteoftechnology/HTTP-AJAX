import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FriendCard from './FriendCard';

const FriendsList = (props) =>{
    return (
        <div>
            {props.friends.map(friend=>{
                return (
                    <Link key={friend.id} to={`/${friend.id}`}><FriendCard friend={friend}/></Link>
                )
            })}
            <Link to="/addfriend">Add a friend</Link>
        </div>
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