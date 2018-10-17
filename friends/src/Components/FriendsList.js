import React from'react';

const FriendsList = props =>{
    return(
        <div>
            <p>{props.friends.name}</p>
            <p>{props.friends.age}</p>
            <p>{props.friends.email}</p>
            <p>{props.friends.id}</p>
        </div>
    )
}


export default FriendsList;