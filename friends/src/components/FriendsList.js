import React from 'react';

const friendsList = (props) => {
    return (
            <div className="friend-card">
                <p className="friend-name">{props.friend.name}</p>
                <h4 className="sub-cat">Age: </h4>
                <p className="friend-details">{props.friend.age}</p>
                <h4 className="sub-cat">Email: </h4>
                <p className="friend-details">{props.friend.email}</p>
            </div>
        )
}

export default friendsList