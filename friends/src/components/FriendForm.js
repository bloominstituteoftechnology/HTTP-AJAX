import React from 'react';
import { Link } from 'react-router-dom';

const FriendForm = props => {
    return (
        <div>
            <Link to="/">Back to List</Link>
            <form onSubmit={props.addNewFriend}>
                <input
                    type="text"
                    value={props.name}
                    onChange={props.handleChanges}
                    name="name"
                    placeholder="name"
                />
                <input
                    type="text"
                    value={props.age}
                    onChange={props.handleChanges}
                    name="age"
                    placeholder="age"
                />
                <input
                    type="text"
                    value={props.email}
                    onCharge={props.handleChanges}
                    name="email"
                    placeholder="email"
                />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default FriendForm