import React from "react";
import "./FriendsList.css";
import Friend from "../Friend/Friend.js";

const FriendsList = props => {
    return (
        <ul className="friends-list">
            <li key={props.data.id}>
                {props.data.map(friend => {
                    return (
                        <Friend {...friend}/>
                    );
                })}
            </li>
        </ul>
    );
}

export default FriendsList;