import React from 'react';


const Friends = props => {

    return(
        <div className="friends">
            <div className="name">Name:{' '} 
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

export default Friends