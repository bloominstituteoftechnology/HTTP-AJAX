import React, { Component } from 'react';

class Friend extends Component {
    render() {
        let friend = this.props.friend;
        return (
            <div className="friend-data">
             <div className='name'>{friend.name}</div>   
             <div className='age'>{friend.age}</div>
             <div className='email'>{friend.email}</div>      
            </div>
        );
    }
}

export default Friend;
