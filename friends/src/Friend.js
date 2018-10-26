import React from 'react';
import {Text, FriendStyle, FriendHeader, X, Email, UpdateButton} from './Styled Components';
import UpdateForm from './UpdateForm';


export default class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state={
            updateStatus: false,
            name: '',
            age: 0,
            email: ''
        }
    }

    updateFriendHandler = (e) => {
        e.preventDefault();
        const id = this.props.id
        this.props.updateFriend(id, this.state.name, this.state.age, this.state.email);
        this.setState({
            updateStatus: !this.state.updateStatus
        })
        console.log(id, this.state.name, this.state.age, this.state.email)
    }

    inputHandler = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
          })
    }

    updateHandler = (e) => {
        e.preventDefault();
        this.setState({
          updateStatus: !this.state.updateStatus
        })
      }
    
      exitForm = (e) => {
        this.setState({
          updateStatus: !this.state.updateStatus
        })    
      }

    render(){
        return(
            <FriendStyle>
                <X onClick={this.props.delete(this.props.id)}>X</X>
                <FriendHeader>My name is {this.props.friend.name}</FriendHeader>
                <Text>I am {this.props.friend.age} years old.</Text>
                <Text>You can contact me at <Email onClick={this.props.no} href='#'>{this.props.friend.email}</Email></Text>
                <UpdateButton onClick={this.updateHandler}>Update</UpdateButton>

                {this.state.updateStatus ? <UpdateForm update={this.updateFriendHandler} change={this.inputHandler} exitForm={this.exitForm} /> : null }
            </FriendStyle>
        )
    }
};



