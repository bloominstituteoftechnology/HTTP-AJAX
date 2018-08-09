import React from 'react';


export default FriendsDisplay = props => {

    return(
        <div className="friends">
            <div onClick={props.deleteFriend} className="name">Name:{' '} 
            {props.friend.name}
            </div>
            <div className="age">Age:{' '} 
            {props.friend.age}
            </div>
            <div className="email">Email:{' '} 
            {props.friend.email}
            </div>
        </div>
        );
}



