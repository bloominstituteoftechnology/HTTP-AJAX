import React, { Component } from 'react';
import axios from 'axios';
console.log(this.props)

const Friend = props => { 
const {friends} = props;
const friend = friends.find(friend => friend.id === parseInt(props.match.params.id))




    return(<React.Fragment>
            <div  class="dataContainer-style">
            <div class="name-style">{friend.name}</div>
            <div class="age-style">Age:{friend.age}</div>
            <div class="email-style">{friend.email}</div>
            <button onClick={() => props.deleteFriend(friend.id,window.history.back())}>Delete</button>
            </div>
        </React.Fragment>)

   
}
    export default Friend;