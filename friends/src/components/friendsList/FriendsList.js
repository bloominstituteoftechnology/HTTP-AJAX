import React from "react";
import Friends from "../friends/Friends";
import {Link} from "react-router-dom";

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                 return(
                // <Link to= {`/friend/${friend.id}`} >
                < Friends 
                handleSetData = {props.handleSetData}
                key = {friend.id} 
                friend ={friend} 
                handleDelete = {props.handleDelete}
                />
                // </Link>
                 )
            })}
        </div>
    )
}

export default FriendsList;