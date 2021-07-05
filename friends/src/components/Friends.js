import React from 'react'
import './Friends.css'
const Friends = props =>{
    const id = props.friend.id;
    return (
        <div className='friend-card'>
            <div >
                <h2>{props.friend.name}</h2>
                <p>age: {props.friend.age}</p>
                <p>email: {props.friend.email}</p>
            </div>
             <button className='close' onClick={props.delete(id)}>X</button>
        </div>
    )
}
 export default Friends 