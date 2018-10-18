import React from 'react'

function Friends(props) {
    return (
    <div className='friends'>{props.notes.map(friends => {
        return(
         <div key={friends.id}>{friends.name} {friends.age}, email: {friends.email}</div>
        );
      })}</div>
    )
}

export default Friends;


