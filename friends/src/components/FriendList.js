import React from "react";
import Friend from "./Friend";

function FriendList(props) {
    return(
        <div>
            {props.friendsList.map(friend => {
                return <Friend key={friend.id} friend={friend}/>
            })}
        </div>
    )
}

export default FriendList;
