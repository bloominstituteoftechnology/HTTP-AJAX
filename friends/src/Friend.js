import React from 'react';
import {Text, FriendStyle, FriendHeader} from './Styled Components';

const Friend = (props) => {
    return(
        <FriendStyle>
            <FriendHeader>My name is {props.friend.name}</FriendHeader>
            <Text>I am {props.friend.age} years old.</Text>
            <Text>You can contact me at <strong>{props.friend.email}</strong></Text>
        </FriendStyle>
    )
};

export default Friend;
