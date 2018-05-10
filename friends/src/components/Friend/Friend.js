import React from "react";
import './Friend.css';
import { Link } from 'react-router-dom';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            age: props.age,
            id: props.id
        }
    }

    render() {
        return (
            <div className="friend-card">
                <h3>{this.state.name}</h3>
                <p>{`Age: ${this.state.age}`}</p>
                <p>{`Email: ${this.state.email}`}</p>
                <Link to="/update" onSubmit={event => this.handleUpdateFriend}>Update</Link>
            </div>
        );
    }
}

export default Friend;