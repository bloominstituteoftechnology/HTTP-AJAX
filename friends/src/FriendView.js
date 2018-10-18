import React, { Component } from "react";
import axios from "axios";
import Friend from './friend'
import {Link} from 'react-router-dom';

const FriendsView=(props)=> {
    return props.friendsData.map((friend)=>{
        return(
            <Friend 
                unfriend={props.unfriend}
                friend={friend}
                update={props.update}
            /> 
        )
    })
      
}
export default FriendsView;
