import React from 'react';
import './Friend.css';

const Friend = (props) => {
    return (                           
        <div className="Friend-Card">
            <h2>{props.friend.name}</h2>
            <h4>Age: {props.friend.age}</h4>
            <h4>Email: {props.friend.email}</h4>
            <button onClick={this.handleClick}>Update</button>
            <button onClick={this.handleClick}>Delete</button>
        </div>
    );
}

export default Friend;