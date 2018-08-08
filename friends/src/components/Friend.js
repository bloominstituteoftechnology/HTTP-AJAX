import React from "react";
// import { Link, NavLink, Route } from "react-router-dom";
import './Friend.css';


const Friend = props => {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    );
}

export default Friend;