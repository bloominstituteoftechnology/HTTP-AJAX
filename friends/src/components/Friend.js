import React, { Component } from 'react';
console.log(this.props)

const Friend = props => { 
const {friends} = props;
console.log(friends)
const friend = friends.find(friend => friend.id === parseInt(props.match.params.id))
console.log(friend)

    return(<React.Fragment>
            <div  class="dataContainer-style">
            <div class="name-style">{friend.name}</div>
            <div class="age-style">Age:{friend.age}</div>
            <div class="email-style">{friend.email}</div>
            </div>
        </React.Fragment>)

   
}
    export default Friend;