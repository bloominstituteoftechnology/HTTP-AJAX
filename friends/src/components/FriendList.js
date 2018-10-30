import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './FriendList.css';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const FriendList = props => {

    return(
            <div className="friendlist-container">
                {props.friends.map(friend => (
                    <div className="friend-card" key={friend.id}>
                        <div className="friend-card-header">
                            <h2>{friend.name}</h2>
                        </div>
                        <div >
                            <p>ID: {friend.id}</p>
                            <p>AGE: {friend.age}</p>
                            <p>EMAIL: </p>
                            <p>{friend.email}</p>
                        </div>
                        <div className="friendlist-buttons">
                            <div className="friendlist-delete"><h3 style={{cursor: "pointer"}}>DELETE</h3></div>
                            <div className="friendlist-detail"><StyledLink to={`/friendslist/${friend.id}`}><h3>DETAILS</h3></StyledLink></div>
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