import React from "react";
import Friends from "./friends"

const FriendsList = props => {
    
    return (
        <div>
            {props.Friends.map(friend => {
                
                 return(
                <  Friends
                handleSetData = {props.handleSetData}
                key = {friend.id} 
                friend ={friend} 
                handleDelete = {props.handleDelete}
                />
                
                 )
            })}
        </div>
    )
}

export default FriendsList;