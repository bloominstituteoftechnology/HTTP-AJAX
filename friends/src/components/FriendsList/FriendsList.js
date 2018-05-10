import React from "react";
import "./FriendsList.css";
import Friend from "../Friend/Friend.js";

const FriendsList = props => {
    return (
        <ul className="friends-list">
                {props.data.map(friend => {
                    return (
                        <li key={friend.id}>
                            <Friend {...friend}/>
                        </li>
                    );
                })}
        </ul>
    );
}

export default FriendsList;