import React from 'react';

const FriendsForm = (props) => {
    return (
        <input type = 'text' 
        onChange = {props.changeNameHandler} 
        onKeyDown = {e => {
            if(e.keyCode === 13) {
                props.addFriendHandler();
            }
        }} />
    );
}
 
export default FriendsForm;