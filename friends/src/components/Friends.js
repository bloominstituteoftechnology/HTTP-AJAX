import React from 'react';
import './Friends.css';

const Friend = props => {
    return (
        <div className="friend-wrapper">
            <div className="friends">
            <h2 className="friend-name">
                    Name: <p>{props.friend.name}</p>
                </h2>
                <h2 className="friend-age">
                    Age: <p>{props.friend.age}</p>
                </h2>
                <h2 className="friend-email">
                    Email: <p>{props.friend.email}</p>
                </h2>
            </div>
        </div>
    );
}

export default Friend; 