import React from 'react';


function Friend(props){
    return(
        <div>
            <h3>{props.friend.name}</h3>
            <h4>{props.friend.age}</h4>
            <h4>{props.friend.email}</h4>
        </div>
    )
}

export default Friend;