import React from "react";
import "./FriendsList.css";

const FriendsList = props => {
    return (
        <ul className="friends-list">
            {props.data.map(friend => {
                return (
                    <li key={friend.id}>
                    <div className="friend-card">
                        <h3>{friend.name}</h3>
                        <p>{`Age: ${friend.age}`}</p>
                        <p>{`Email: ${friend.email}`}</p>
                    </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default FriendsList;