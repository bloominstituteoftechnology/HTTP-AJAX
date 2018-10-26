import React from 'react';
import styles from '../CSS/FriendRow.css';



const FriendRow = (props) =>{
    return(
       <div className = 'friend-row'>
            <div className = 'friend-name'>{props.friend.name}</div>
            <div className = 'friend-age'>{props.friend.age}</div>
            <div className = 'friend-email'>{props.friend.email}</div>
            <button className = 'delete-button' onClick = {() => {props.deleteFriend(props.friend.id)}}> x </button>
        </div>
    )
    
}

export default FriendRow;