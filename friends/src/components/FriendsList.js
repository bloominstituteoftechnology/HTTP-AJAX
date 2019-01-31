import React from 'react';

const FriendsList = (props) => {
    return(
        <div>
            <div>
                <p>Name: {props.friend.name}</p>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>
            <div className="baseline" />
        </div>
    )
}

export default FriendsList