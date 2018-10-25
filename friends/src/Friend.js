import React from 'react';
import {Text, FriendStyle, FriendHeader, X, Email} from './Styled Components';

const Friend = (props) => {
    return(
        <FriendStyle>
            <X onClick={props.delete(props.id)}>X</X>
            <FriendHeader>My name is {props.friend.name}</FriendHeader>
            <Text>I am {props.friend.age} years old.</Text>
            <Text>You can contact me at <Email onClick={props.no} href='#'>{props.friend.email}</Email></Text>
        </FriendStyle>
    )
};

export default Friend;
