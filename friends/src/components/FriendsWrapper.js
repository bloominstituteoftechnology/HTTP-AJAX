import React, { Component } from 'react';
// import FriendsForm from './FriendsForm';


const FriendsWrapper = ({ friends }) =>
    
    <div>
        { friends.map(friend =>
            <div key={friend.id}>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
            </div>
        )}
    </div>




export default FriendsWrapper;