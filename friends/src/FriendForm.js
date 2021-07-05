import React from 'react';

function FriendForm(props) {
    return (

        <form action='' >
        
            <input type='text' placeholder='Name' value={props.newFriend.name}/>
            <input type='number' placeholder='Age' value={props.newFriend.age}/>
            <input type='text' placeholder='Email' value={props.newFriend.email}/>
        
        </form>

    );


}