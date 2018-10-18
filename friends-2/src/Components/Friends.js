import React from "react";
import "./friends.css"
const Friends = props => {
    if (!props.friends.length) {
      return  <h3>Loading . ..</h3>
    } else
    return (
    <div className="friends">
        <h1 className="header">Friends</h1>
        {props.friends.map(friend => {
            return (
                <div key={friend.email}>
                    <ul>
                    <h2>{friend.name}</h2>
                        <li>Age:{friend.age}</li>
                        <li>Email: {friend.email}</li>
                    </ul>
                </div>
            )
        })}
    </div>
)
}

export default Friends;