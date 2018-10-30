import React from 'react'

const SingleFriend = (props) => {
    return(
        <div>
          {props.friends.map((friend, index) => <div key={index}> 
          
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>
          
          </div>)}
        </div>
    )
}

export default SingleFriend