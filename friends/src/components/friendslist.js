import React, { Component } from 'react';

const FriendsList = (props) => {
    
    return (  
        <div>
            {props.friendslist.map(friend => 
            <div key={friend.id}>
                <h3>{friend.name}</h3>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div>)}
        </div>
    );
}
 
export default FriendsList;