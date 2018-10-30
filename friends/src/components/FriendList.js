import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './FriendList.css';



const FriendList = props => {

    return(
            <div className="friendlist-container">
                {props.friends.map(friend => (
                    <div className="friend-card" key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>ID: {friend.id}</p>
                        <p>AGE: {friend.age}</p>
                        <p>EMAIL: </p>
                        <p>{friend.email}</p>
                        <div className="friendlist-buttons">
                            <div className="friendlist-delete"><h3 style={{cursor: "pointer"}}>DELETE</h3></div>
                            <div className="friendlist-detail"><Link to={`/friendslist/${friend.id}`}><h3>DETAILS</h3></Link></div>
                        </div>
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