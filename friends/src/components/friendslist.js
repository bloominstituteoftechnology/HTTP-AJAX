import React, { Component } from 'react';

const FriendsList = (props) => {
    const { id, name, age, email} = props.friendslist;
    return (  
        <div>
            {props.friendslist.map(friend => 
            <div key={id}>
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{email}</p>
            </div>)}
        </div>
    );
}
 
export default FriendsList;