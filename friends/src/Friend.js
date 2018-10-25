import React from 'react';
import {Text, FriendStyle, FriendHeader, X, Email, UpdateButton} from './Styled Components';
import UpdateForm from './UpdateForm';

const Friend = (props) => {
    return(
        <FriendStyle>
            <X onClick={props.delete(props.id)}>X</X>
            <FriendHeader>My name is {props.friend.name}</FriendHeader>
            <Text>I am {props.friend.age} years old.</Text>
            <Text>You can contact me at <Email onClick={props.no} href='#'>{props.friend.email}</Email></Text>
            <UpdateButton>Update</UpdateButton>
            {/* <Route path={`/friends/${props.id}`} component={}><button>Update Friend</button></Route> */}
        </FriendStyle>
    )
};

export default Friend;
