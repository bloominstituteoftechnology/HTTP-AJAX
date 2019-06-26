import React from 'react';

function FriendCard(props){

    return <div>
        <h4>Card for {props.friend.name} </h4>
        <p>{props.friend.age} years old, {props.friend.email} </p>
    </div>
}

export default FriendCard