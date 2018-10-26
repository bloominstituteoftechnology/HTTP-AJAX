import React from 'react';
import {Text, FriendStyle, FriendHeader, X, Email, UpdateButton} from './Styled Components';
import UpdateForm from './UpdateForm';
import {Route} from 'react-router-dom';


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

    updateHandler = (e) => {
        e.preventDefault();
        console.log(this.state.updateStatus)
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
        console.log(this.state.updateStatus)
        return(
            <FriendStyle>
                <X onClick={this.props.delete(this.props.id)}>X</X>
                <FriendHeader>My name is {this.props.friend.name}</FriendHeader>
                <Text>I am {this.props.friend.age} years old.</Text>
                <Text>You can contact me at <Email onClick={this.props.no} href='#'>{this.props.friend.email}</Email></Text>
                <UpdateButton onClick={this.updateHandler}>Update</UpdateButton>

                {this.state.updateStatus ? <UpdateForm exitForm={this.exitForm} /> : null }
            </FriendStyle>
        )
    }
};



