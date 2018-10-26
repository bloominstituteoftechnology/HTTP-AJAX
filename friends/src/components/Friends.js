import React, { Component } from 'react';
import Form from './Form';
import Friend from './Friend';
import Header from './Header';

class Friends extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
              <Header />  
              
              {this.props.friends.map( friend => <Friend key={friend.id} friend={friend}  deleteFriendHandler = {this.props.deleteFriendHandler}/>)}
              <Form submitHandler={this.props.submitHandler} 
                    inputChangeHandler={this.props.inputChangeHandler}
                    deleteFriendHandler = {this.props.deleteFriendHandler}
                    name = {this.props.name}
                    age = {this.props.age}
                    email = {this.props.email} />  
            </div>
        );
    }
}

export default Friends;
