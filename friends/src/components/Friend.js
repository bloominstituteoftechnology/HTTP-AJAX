import React from 'react'

const Friend = (props) => {
  
  return (
    <div>

    <div><strong>{props.friend.name}</strong></div>
    <div><em>{props.friend.age}</em></div>
    <div>{props.friend.email}</div>
    <button onClick={() => props.deleteFriend}>delete</button>
    <br></br>
    
    </div>

  )
}

export default Friend

//(event, props.friend.id)