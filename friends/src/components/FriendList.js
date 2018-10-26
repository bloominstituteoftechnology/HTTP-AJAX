import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendList = props =>  (
    <div>
        {props.friends.map(friend => {
            return <Friend key={friend[0]} friend={friend} youAreNotMyFriend={props.youAreNotMyFriend} passProperties={props.passProperties} />
        })}
        <Link to='/addfriend'>Have a new friend?</Link>
    </div>
);


export default FriendList;