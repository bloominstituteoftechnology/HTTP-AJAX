import React from 'react';
import './Friend.css'

const FriendList = (props) => {
    return (
        <div className="friends-list">
            <h3>Name : {props.data.name} </h3>
            <h3>Age : {props.data.age}</h3>
            <h3>Email: {props.data.email}</h3>
        </div>
    )
}

export default FriendList;