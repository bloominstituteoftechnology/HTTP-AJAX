import React, { Component } from "react";
import Friends from './Friends'

const Friend = props => {

    // state = {
    //     friend: null
    // };

    // componentDidMount() {
    //     // this.setState(() => ({friend: props}))
    // }


    console.log(props)
    // const { name, age, email } = this.state.friend;
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
        </div>
    )
}

export default Friend;