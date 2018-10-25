import React from 'react';

export default props =>{
    return(
    <div style={{border: '1px solid black'}}>
            <p style={{cursor: "pointer"}} onClick={props.deleteFriendHandler(props.friend.id)} >X</p>
            <p>{props.friend.name}</p>
            <p>- {props.friend.age}</p>
        </div>
    );
  }
