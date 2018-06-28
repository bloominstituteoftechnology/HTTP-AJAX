import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendsList = props => {
    return (
        <div className="friends-list">
            {props.friends.map(friend => {
                return(
                    <Link to={`friends/${friend.id}`}>
                        <Friend key={friend.id} friend={friend} handleSetData={props.handleSetData} />
                    </Link>
                )
            })}    
        </div>
    )
}
 
export default FriendsList;
