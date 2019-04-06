import React from "react";
// import ReactDOM from "react-dom";
// import {Route, Link} from 'react-r

const FriendList = props => {
    const friends = props.friends;
    const friendArray = props.friends;
    const friendsArray = friends.map( (friend) =>
        <ul><b>{friend.name}</b> {friend.age} {friend.email}</ul>
    );
    return(
        <FriendList/>
    );
}

export default FriendList;