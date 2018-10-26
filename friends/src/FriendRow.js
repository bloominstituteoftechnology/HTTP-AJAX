import React from 'react';



const FriendRow = (props) =>{
    return(
       <tr>
            <td>{props.friend.name}</td>
            <td>{props.friend.age}</td>
            <td>{props.friend.email}</td>
            <button onClick = {() => {props.deleteFriend(props.friend.id)}}> x </button>
        </tr>
    )
    
}

export default FriendRow;