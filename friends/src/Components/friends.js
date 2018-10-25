import React, { Component } from 'react'
import axios from 'axios';
import Friend from './friend';


 const Friends = props=> {
    return (
      <div>
      {props.friendsData.map(item=>(
          <Friend key={item.id} item={item} />
      ))}
       </div>
    )
  }



export default Friends;


