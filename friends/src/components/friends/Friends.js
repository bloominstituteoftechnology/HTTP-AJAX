import React from 'react';

const Friends = props => {

    return(
        <div className="friends">
            <div className="name">
            {props.friend.name}
            </div>
            <div className="age">
            {props.friend.age}
            </div>
            <div className="email">
            {props.friend.email}
            </div>
        </div>
        );
}

export default Friends