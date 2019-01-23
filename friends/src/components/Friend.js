import React from 'react';
import './Friend.css';

function Friend(props){
    return(
        <div className="friendWrapper">
        <h3>Hello, I'm {props.friend.name}!</h3>
        <div className="middleDiv">I am {props.friend.age} years old.</div>
        <div>You can contact me at {props.friend.email}.</div>
        </div>
    );
}

export default Friend;