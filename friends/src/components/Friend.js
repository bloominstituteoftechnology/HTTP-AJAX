import React, { Component } from 'react';

class Friend extends Component {
    render() {
        let friend = this.props.friend;
        console.log(this.props.friend.name);
        const delFriend = () => {
            this.props.deleteFriendHandler(friend.id);
        }
        const updateFriend = () => {
            this.props.updateFriendHandler(friend.id, friend.name, friend.age, friend.email)
        }
        return (
            <div className="friend-data">
             <div className='name'>Name: {friend.name}</div>  
             <div className='age'>Age: {friend.age}</div>
             <div className='email'>Email: {friend.email}</div>
            <form onSubmit={updateFriend}>
                <input type='text' name="name" className="update-input" value={friend.name} onChange={this.props.inputChangeHandler}/> 
                <input type='text'  name="age" className= "update-input" value={friend.age}  onChange={this.props.inputChangeHandler} /> 
                <input  type="email" name="email" className="update-input" value={friend.email} onChange={this.props.inputChangeHandler}  /> 
            </form>
             <div className="change">
                <div className="delete"  name="delete" onClick={delFriend}>Delete</div>
                <div className="update" name="update" onClick={updateFriend}>Update</div>  
             </div>    
            </div>
        );
    }
}

export default Friend;
