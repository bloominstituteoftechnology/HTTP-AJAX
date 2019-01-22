import React from 'react';

import Friend from './Friend';

const FriendsList = (props) => {
    // console.log(props)
    const { friendsList } = props;
    // console.log(friendsList)
    return ( 
        <div className="list-container">
            {friendsList.map(friend=><Friend friend={friend} key={friend.id} />)}
        </div> 
    );
}
 
export default FriendsList;