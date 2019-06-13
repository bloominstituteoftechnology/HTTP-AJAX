import React from 'react';
import Friend from './Friend';


 const FriendsList = props =>{
     console.log(props)
    return(
        <div className='FriendList__Card'>
            {props.friendsArray.map(friend=>
            <Friend key={friend.id} info={friend}/>
            )}
        </div>
    )
}

export default FriendsList;