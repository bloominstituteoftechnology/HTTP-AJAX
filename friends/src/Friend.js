import React, { Component } from "react";
import Friends from './Friends'
import { Link } from "react-router-dom";

const Friend = props => {

    return (
        <div>
            <h1>
                {props.friendData.name === undefined
                    ? "friend not found"
                    : props.friendData.name}
            </h1>
            <h3>
                {props.friendData.age === undefined
                    ? "friend not found"
                    : props.friendData.age}
            </h3>
            <h3>
                {props.friendData.email === undefined
                    ? "friend not found"
                    : props.friendData.email}
            </h3>
            <Link onClick={() => { this.props.updateFriend(Friends) }} to={`/`} >
                <button>HOME</button>
            </Link>
        </div>
    )
}

export default Friend;