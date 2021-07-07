import React from 'react';
import './Friends.css';

const Friend = props => {
    return (
        <div className ={`friend-card ${props.data.name}`}>
            <div>Name: {props.data.name}</div>
            <div>Age: {props.data.age}</div>
            <div>Email: {props.data.email}</div>
        </div>
    )
}

export default Friend;