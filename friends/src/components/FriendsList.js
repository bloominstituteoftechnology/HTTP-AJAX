import React from 'react';
// import {Link} from 'react-router-dom';

import Friend from './Friend';
import EditFriend from './forms/EditFriend';

const FriendsList = (props) => {
    let selectedFriend;
    selectedFriend = props.friends.find(friend => friend.id === props.match.params.id);
    if (selectedFriend !== undefined) {
        return (
            <Friend friend={selectedFriend} />
        )
    }
    return (
        <div>
            <div className='friend'>
                <div className='friendID'>ID</div>
                <div>Age</div>
                <div>Name</div>
                <div>Email</div>
            </div>
            {props.friends.map(friend => {
                return (
                    <>
                        <Friend key={friend.name + friend.id} friend={friend} />
                        <EditFriend 
                            friend={friend}
                            onNameChange={props.addFriendNameUpdate} 
                            onEmailChange={props.addFriendEmailUpdate} 
                            onAgeChange={props.addFriendAgeUpdate}
                            friendName={props.newFriendName}
                            friendEmail={props.newFriendEmail}
                            friendAge={props.newFriendAge}
                            editFriendHandler={props.editFriendHandler}/>
                        <button onClick={() => props.deleteFriend(friend.id)}>X</button>
                    </>
                )
            })}
        </div>
    )
}

export default FriendsList;