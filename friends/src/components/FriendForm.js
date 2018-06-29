import React from "react";

const FriendForm = props => {
    return(
        <form onSUbmit={}>
            <input type="text" value={props.value} onChange={props.handleTextChange}/>
            </form>
    )
}

export default FriendForm;