import React, { Component } from 'react'
import Friend from './friend';
import { Button } from 'reactstrap';

 const Friends = props=> {
    return (
      <div>
      {props.friendsData.map(item=>(
          <Friend key={item.id} item={item} deleteHOE={props.deleteHOE}/>
      ))}
       </div>
    )
  }



export default Friends;


