import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const FriendForm = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
        const friendInput= Array.from(event.target.querySelectorAll("input"));
        const newFriend = {
            id: (props.location.state.newID + 1),
            name: friendInput[0].value,
            age: Number(friendInput[1].value),
            email: friendInput[2].value,
        };
        event.target.reset();
        axios.post('http://localhost:5000/friends', newFriend)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>New Friend:</label>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="age" placeholder="age"/>
                <input type="text" name="email" placeholder="email"/>
                <input type="submit" value="Submit" />
            </form>
            <div>
            <Link to="/">Return</Link>
            </div>
        </div>
    )
}