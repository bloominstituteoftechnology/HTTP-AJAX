import React from 'react';

const FriendRow = (props) =>{
    return(
       <tr>
            <td>{props.friend.name}</td>
            <td>{props.friend.age}</td>
            <td>{props.friend.email}</td>
        </tr>
    )
    
}

export default FriendRow;