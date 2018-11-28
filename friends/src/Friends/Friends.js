import React from 'react'
import './Friends.css'
const Friends  = props =>{
    return(
    <div className = 'friend-card'>
        <h2>{props.friend.name}</h2>
        <p>age: {props.friend.age}</p>
        <p>email: {props.friend.email}</p>
    </div>
    )
}

export default Friends