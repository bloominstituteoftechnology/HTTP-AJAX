import React, { Component } from 'react';

class Friends extends Component{
    constructor(props){
        super();
        this.state = {

        };
    }
    
    render(){
        return(
            <div className='friendsList'>
                {this.props.friends.map(friend => (
                    <div key={friend.id}>
                        <div><span>{friend.name}</span></div>
                        <div><span>{friend.age}</span></div>
                        <div><span>{friend.email}</span></div>
                        <button onClick={() => this.props.deleteFriend(friend.id)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }

}

export default Friends;