import React from "react";
import "./FriendsList.css";
import Friend from "../Friend/Friend.js";

const FriendsList = props => {
    return (
        <div className="friends-list">
                {props.data.map(friend => {
                    return (
                            <Friend key={friend.id} {...friend}/>
                    );
                })}
        </div>
    );
}

export default FriendsList;