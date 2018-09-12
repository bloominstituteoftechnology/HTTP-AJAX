import React from 'reat';
import Axios from 'axios';
import Friend from './Friend';

function FriendsList(){
    return(
        <div>
            {friends.map((friend) => <Friend key={friend.id} friend = {friend} />)}
        </div>
    )

}

export default FriendsList;