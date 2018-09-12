import React from 'react';
import '../App.css';

const Friend = props =>{
    return(
        <div className="FriendForm">
            <h2>{props.friend.id+": "}</h2>
            <h2>{props.friend.name}</h2>
            <h2>{props.friend.age}</h2>
            <h2>{props.friend.email}</h2>
        </div>
    )
}

export default Friend;