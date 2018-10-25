import React, { Component } from 'react';

class Friends extends Component {
    constructor(props){
    super(props);
   
} 
    render(){
    return(
        <div>
            <p>Name:{this.props.friend.name}</p>
            <p>Age:{this.props.friend.age}</p>
            <p>Email:{this.props.friend.email}</p>
            <p onClick={this.props.deleteFriendHandler(this.props.friend.id)}>X</p>
        </div>
    )
}
}


   

   
export default Friends;