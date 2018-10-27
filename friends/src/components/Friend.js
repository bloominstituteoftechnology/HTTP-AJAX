import React, { Component } from 'react';

class Friend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newFriend: {
                 name: this.props.friend.name,
                 age: this.props.friend.age,
                 email:this.props.friend.email,
                 id: this.props.friend.id
            }
        }
    }
    inputChange = (event) => {
        let name = event.target.name;
        this.setState({
            newFriend: {
                ...this.state.newFriend, [name]:event.target.value
            }
        });
    }
    updateFriend = (event) => {
        event.preventDefault();
        if(event.target.classList.contains("update")) {
            if(event.target.parentNode.previousElementSibling.style.display === '') {
              event.target.parentNode.previousElementSibling.style.display = "block"; 
               if(event.target.innerHTML === 'Update') {
                  event.target.innerHTML = 'Save';
               }  
            } else {
              event.target.parentNode.previousElementSibling.style.display = '';
              if(event.target.innerHTML === 'Save') {
                  event.target.innerHTML = 'Update';
                  this.props.updateFriendHandler(this.state.newFriend);
               }  
            }
      }  
    
       
        }
    
    delFriend = () => {
        this.props.deleteFriendHandler(this.state.newFriend.id);
    }

    render() {
        let friend = this.props.friend;
       
        return (
            <div className="friend-data">
                <div className='name'>Name: {friend.name}</div>  
                <div className='age'>Age: {friend.age}</div>
                <div className='email'>Email: {friend.email}</div>
                <form  className="update-form">
                    <input type='text' name="name" className="update-input" value={this.state.newFriend.name} onChange={this.inputChange} /> 
                    <input type='text'  name="age" className= "update-input" value={this.state.newFriend.age}  onChange={this.inputChange} /> 
                    <input  type="email" name="email" className="update-input" value={this.state.newFriend.email} onChange={this.inputChange} /> 
                </form>
                <div className="change">
                    <div className="delete" name="delete"  onClick={this.delFriend} >Delete</div>
                    <div className="update" name="update"  onClick={this.updateFriend} >Update</div>  
                </div>    
            </div>
        );
    }
}

export default Friend;
