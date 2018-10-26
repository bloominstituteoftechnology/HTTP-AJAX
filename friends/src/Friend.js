import React from 'react';
import {Text, FriendStyle, FriendHeader, X, Email, UpdateButton} from './Styled Components';
import UpdateForm from './UpdateForm';
import {Route} from 'react-router-dom';


const Friend = (props) => {
    return(
        <FriendStyle>
            <X onClick={props.delete(props.id)}>X</X>
            <FriendHeader>My name is {props.friend.name}</FriendHeader>
            <Text>I am {props.friend.age} years old.</Text>
            <Text>You can contact me at <Email onClick={props.no} href='#'>{props.friend.email}</Email></Text>
            <UpdateButton onClick={props.updateHandler}>Update</UpdateButton>
            props.updateStatus ? <UpdateForm/> : null
        </FriendStyle>
    )
};

export default Friend;


// props.updateStatus ? null : render={(props)=> <UpdateForm {...props} exitForm={props.exitForm} />}
