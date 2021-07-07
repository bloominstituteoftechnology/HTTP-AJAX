import React from 'react'
import './friends.css'

function Friends(props) {
    return (
    <div className='friendsDiv'>{props.notes.map(friends => {
        return(
         <div className='friends' key={friends.id}>{friends.name} {friends.age}, email: {friends.email} <button onClick={() => props.delete(friends.id)}>Delete</button>
         <button onClick={() => props.update(friends.id)}>Update</button>
         </div>
        );
      })}
      </div>
    )
}

export default Friends;


