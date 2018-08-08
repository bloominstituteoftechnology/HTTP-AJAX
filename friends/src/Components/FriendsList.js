import React from 'react';

const FriendsList = (props) => {
    if (props.loading){
        return (
            <h1> Currently Loading </h1>
        )
    }
    return ( 
        <div className="friendList">
            {props.friends.map(friend=> (
                <p key={friend.name}> 
                    {friend.name} 
                </p>
            ))}
        </div>
     );
}
 
export default FriendsList;