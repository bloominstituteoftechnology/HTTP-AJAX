import React from 'react';

const FriendsList = (props) => {
    return(
        <div>
            <h1>Friends</h1>
            <div>
                <p>Name: {props.friend.name}</p>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>
        </div>
    )
}

export default FriendsList