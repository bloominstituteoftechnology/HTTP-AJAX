import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: props.friends,
        }
    }
    render() {
        return (
    <div>
        <NavLink to="/">Back to Friend List</NavLink>
        {this.state.friends.name}
        {this.state.friends.email}
        {this.state.friends.age}
    </div>
        )
    }
}

export default UpdateFriend