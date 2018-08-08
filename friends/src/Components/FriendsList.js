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
                <div className="friend" key={friend.id}>
                    <p> Name: {friend.name} </p>
                    <p> Age: {friend.age} </p>
                    <p> Email: {friend.email} </p>
                </div>
            ))}
        </div>
     );
}
 
export default FriendsList;