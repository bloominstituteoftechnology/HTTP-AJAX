import React, { Component } from 'react';
import EditForm from './EditForm';

const FriendPage = props => {
    console.log(props, 'test');

    const friendId = props.match.params.id;
    //console.log(friendId);
    console.log(props.friends);
    console.log(friendId);
    const friend =  props.friends.find(friend => {
        console.log(friend.id);
       
        return friend.id == friendId});
    console.log(friend);
    //console.log('any string', props);
    return (
        <div className="friend">
            <h2>{friend.name}</h2>
            <h4>{friend.age}</h4>
            <p>{friend.email}</p>
            <EditForm  history={props.history} editFriend={props.editFriend} id={friendId}/>
            
            
        </div>
        
    );
}

export default FriendPage;