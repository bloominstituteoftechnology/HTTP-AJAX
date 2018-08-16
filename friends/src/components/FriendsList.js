import React from 'react';
import Friend from './Friend';


const FriendList = props => {

    return (
        <div>
            {props.friends.map(item => <Friend friend={item} key={item.id} />)}
        </div>
    )
}


export default FriendList;
