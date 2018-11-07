import React, { Component } from 'react';
import SoloFriend from './SoloFriend';

const FriendsList = props => {
    return (
        <div className = 'friendBox'>
        test
        <SoloFriend />
           {/* {props.SoloFriends.map((friend, index) => {
                return (
                    <SoloFriend key={index} id={friend.id} name={friend.id}  age={friend.age} email={friend.email} />
                )

           })} */}
           {/* map friend array here
        Inside your React application, create a component to display the list of friends coming from the server.
1.  Add a form to gather information about a new friend.
1.  Add a button to save the new friend by making a `POST` request to the same endpoint listed above. */}
        </div>
    )
}

// friends is an array of friend info on server.js .

export default FriendsList;