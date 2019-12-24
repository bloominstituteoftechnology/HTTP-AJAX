import React, { Component } from "react";
import Friends from './Friends'
import { Link } from "react-router-dom";
import './Friend.css';

const Friend = props => {

    return (
        <div className={`single-container`}>
            <div className={`single-card`}>
                <h2>
                    {props.friendData.name === undefined
                        ? "friend not found"
                        : (`Name: ${props.friendData.name}`)}
                </h2>
                <h2>
                    {props.friendData.age === undefined
                        ? "friend not found"
                        : (`Age: ${props.friendData.age}`)}
                </h2>
                <h2>
                    {props.friendData.email === undefined
                        ? "friend not found"
                        : (`Email: ${props.friendData.email}`)}
                </h2>
                <Link onClick={() => { this.props.updateFriend(Friends) }} to={`/`} >
                    <button className={`home-button`}>HOME</button>
                </Link>
            </div>
        </div>
    )
}

export default Friend;