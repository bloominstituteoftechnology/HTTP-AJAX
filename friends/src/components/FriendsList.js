import React from 'react';
import axios from 'axios';


function FriendsList(props){
    console.log(props.friendly);
    return (
        props.friendly.map(friend => {
            return(
  
              <div>
                <div>{friend.id}</div>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>              
              </div>
  
            );
          })
    )
}

export default FriendsList;