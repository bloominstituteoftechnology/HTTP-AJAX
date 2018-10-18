import React from 'react';

const Friend = (props) => {
    return(
        <div className="friend-card" key={props.friend.id}>
            <p><strong>Name:</strong> {props.friend.name}</p>
            <p><strong>Age:</strong> {props.friend.age}</p>
            <p><strong>Email:</strong> {props.friend.email}</p>
        </div>
    );
}

export default Friend;