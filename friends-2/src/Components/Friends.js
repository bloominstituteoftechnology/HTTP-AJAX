import React from "react";
const Friends = props => {
    if (!props.friends.length) {
      return  <h3>Loading . ..</h3>
    } else
    return (
    <div>
        {props.friends.map(friend => {
            return (
                <div key={friend.email}>
                    <ul>
                    <h2>{friend.name}</h2>
                        <li>{friend.age}</li>
                        <li>{friend.email}</li>
                    </ul>
                </div>
            )
        })}
    </div>
)
}

export default Friends;