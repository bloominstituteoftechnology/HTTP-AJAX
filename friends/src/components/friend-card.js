import React from 'react';

function FriendCard(props) {
    return (
        <div className="card friend-card">
            <h2>{props.friend.name}</h2>
            <button
                className="friend-card_delete"
                data-id={props.friend.id}
                onClick={props.onDelete}
                children="X"
            />
            <span>Email: {props.friend.email}</span>
            <span>Age: {props.friend.age}</span>
        </div>
    );
}

export default FriendCard;
