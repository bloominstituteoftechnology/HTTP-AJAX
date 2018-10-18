import React from 'react';

let Friend = props => {
    return(
        <div className="friend">
            <h2>Friend #{props.friend.id}: {props.friend.name}</h2>
            <div className="close" onClick={() => props.deleteHandler(props.friend.id)}>✕</div>
            <p>{props.friend.pronoun} is {props.friend.age} years old.</p>
            <p>Email: {props.friend.email}</p>
            <p>{props.friend.pronoun} likes {props.friend.likes}.</p>
        </div>
    )
}

export default Friend;