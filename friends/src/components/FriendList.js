import React from 'react';
import Friend from './Friend';


const FriendList = (props) => {
  return (
    <div>
      <h1>Friends List:</h1>
      {props.friends.map((x) => {
        return (
          <div>
            <Friend 
              key={x.id}
              friend={x}
            />
          </div>
        )
      })}
    </div>
  )
}


export default FriendList;
