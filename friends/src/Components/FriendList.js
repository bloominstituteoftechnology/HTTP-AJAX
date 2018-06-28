import React from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';

const FriendList = props => {
    return (
        <div className="friendList">
            {console.log('props',props)}
            <button className="button button-save" onClick={() => props.saveInput()} >Save New Friend(s)</button>
            {props.friends.map((friend, index) => (
                <div className="friends" key={friend.id + index}>
                    <div className="friends_name" >{friend.name}</div>
                    <div className="friends_age" >{friend.age}</div>
                    <div className="friends_email" >{friend.email}</div>
                </div>
            ))}
            {props.newFriend.map((friend, index) => (
                <div className="friends" key={friend.id + index}>
                    <div className="friends_name" >{friend.name}</div>
                    <div className="friends_age" >{friend.age}</div>
                    <div className="friends_email" >{friend.email}</div>
                </div>
            ))}
            <Link to="/addFriend">
                <button className="button button-add" > Want to add a friend? </button>
            </Link>
        </div>
    );
};

export default FriendList;