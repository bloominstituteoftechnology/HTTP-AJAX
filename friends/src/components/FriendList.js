import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './FriendList.css';



const FriendList = props => {
    return(
            <div className="friendlist-container">
                {props.friends.map(friend => (
                    <div className="friend-card" key={friend.id}>
                        <Link to={`/friendslist/${friend.id}`}>{friend.name}</Link>
                        <p>ID: {friend.id}</p>
                        <p>AGE: {friend.age}</p>
                        <p>EMAIL: {friend.email}</p>
                        <h3 style={{cursor: "pointer"}}>X</h3>
                    </div>
                ))}
            </div>
    )
}



FriendList.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    })
}


export default FriendList