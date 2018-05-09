import axios from 'axios';
import React, { Component } from 'react';

const FriendsComponent = ({ friends }) => 

    <div>
        {friends.map(friend =>
            <div key={friend.id}>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
            </div>
        )}
    </div>

export default FriendsComponent;