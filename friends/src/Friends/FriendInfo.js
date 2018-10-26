import React from 'react';
import { Link } from 'react-router-dom';

const FriendInfo = (props) => {
    return (
        <div className="friend-info">
            <p style={{cursor: "pointer"}} onClick={props.deleteHandler(props.id)}>X</p>
                <p>ID: {props.id}</p>
                <Link to={`/friends/${props.id}`}>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>Email: {props.email}</p>
                </Link>
        </div>
    )
}

export default FriendInfo;