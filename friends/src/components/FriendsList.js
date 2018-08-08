import React from 'react';
import Friends from './Friends';

const FriendsList = props => {
    return(
        <div>
            {props.friendList.map(friend => <Friends key={friend.name} friend={friend}/>)}
        </div>
    )
}

export default FriendsList;