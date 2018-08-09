import React from 'react';
import FriendsDisplay from './FriendsDisplay';


const Friends = props => {

    return(
        <div className="friends">
             {props.friend.map(friend => <FriendsDisplay  key={friend.id} friend={friend}/>)}
        </div>
        );
}

export default Friends

