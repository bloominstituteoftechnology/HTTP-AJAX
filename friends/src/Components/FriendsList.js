import React from "react";
import friends from "./friends"

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                 return(
                < friends 
                handleSetData = {props.handleSetData}
                key = {friend.id} 
                friend ={friend} 
                />
                
                 )
            })}
        </div>
    )
}

export default FriendsList;