import React from 'react';
import './Friends.css';

function Friend({friend, deleteItem}) {
    return (
        <div className="friend-wrapper">
            <div className="friends">
            <button onClick={event => { deleteItem(event, friend.id)}} className="delete-button" >
                X
            </button>
            <h2 className="friend-name">
                    Name: <p>{friend.name}</p>
                </h2>
                <h2 className="friend-age">
                    Age: <p>{friend.age}</p>
                </h2>
                <h2 className="friend-email">
                    Email: <p>{friend.email}</p>
                </h2>
            </div>
        </div>
    );
}

export default Friend; 