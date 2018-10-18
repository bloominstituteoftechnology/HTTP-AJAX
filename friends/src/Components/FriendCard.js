import React from "react";

const FriendCard = props => {
    return(
        <div>
        <p>Name: {props.friends.name}</p>
        <p>Age: {props.friends.age}</p>
        <p>Email : {props.friends.email}</p>
        <p>Special ID #: {props.friends.id}</p>
        <button onClick= {props.deleteFriendButton} id={props.friends.id}> Delete {props.friends.name} from you friends list</button>
        <button onClick= {props.updateFriend} id={props.friends.id}> Update {props.friends.name}'s info</button>
    </div> 
    )
}

export default FriendCard;