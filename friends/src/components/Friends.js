import React from 'react'


function Friends(props) {
    return (
    <div className='friends'>{props.notes.map(friends => {
        return(
         <div key={friends.id}>{friends.name} {friends.age}, email: {friends.email} <button onClick={() => props.delete(friends.id)}>Delete</button>
         <button onClick={() => props.update(friends.id)}>Update</button>
         </div>
        );
      })}
      </div>
    )
}

export default Friends;


