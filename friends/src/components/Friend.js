import React, { Component } from 'react';

class Friend extends Component {
    render() {
        let friend = this.props.friend;
        // console.log(this.props);
        const delFriend = () => {
            this.props.deleteFriendHandler(friend.id);
            console.log(friend.id);
        }
        return (
            <div className="friend-data">
             <div className='name'>Name: {friend.name}</div>   
             <div className='age'>Age: {friend.age}</div>
             <div className='email'>Email: {friend.email}</div>
             <div className="change">
                <div className="delete"  name="delete" onClick={delFriend}>Delete</div>
                <div className="update" name="update">Update</div>  
             </div>    
            </div>
        );
    }
}

export default Friend;
