import React, { Component } from "react";
import axios from "axios";
import Friend from './friend'

const FriendView=(props)=> {
    return props.friendsData.map((friend)=>{
        return(
            <Friend friend={friend}/>
        )
    })
      
}
export default FriendView;
