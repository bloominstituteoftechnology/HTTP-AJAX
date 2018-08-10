import React from 'react';
import FriendsDisplay from './FriendsDisplay';
import {Link} from 'react-router-dom';


const Friends = props => {

    return(
        <div className="friends">
             {props.friend.map(friend => (
                <FriendDisplayFunction key={friend.id} friend={friend}/>
             
             ))}
        </div>
        );
}

function FriendDisplayFunction ({friend}){

    return(
        <Link to={`/friends/${friend.id}`}>
            <FriendsDisplay  friend={friend}/>
        </Link>
    )
}

export default Friends

