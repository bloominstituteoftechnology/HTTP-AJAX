import React, { Component } from 'react';

export default class FriendList extends Component {

    render() {
        return(
     <div>
         <h3> Welcome to my shitty Friends List </h3>
        {this.props.friends.map((friend) => { 
            return (
            <div key={friend.id}>
                <h4>{friend.name}</h4>
                <div>age: {friend.age}</div>
                <div>{friend.email}</div>
            </div>)
           } )}
     </div>
        )
    }
};