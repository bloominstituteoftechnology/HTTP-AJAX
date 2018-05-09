import React from "react";
import "./FriendsList.css";

const FriendsList = props => {
    return (
        <ul className="friends-list">
            {props.data.map(friend => {
                return (
                    <li key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default FriendsList;