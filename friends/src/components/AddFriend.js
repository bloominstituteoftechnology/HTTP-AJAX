import React, { Component } from 'react';
import axios from "axios";
/* import FriendsList from "./friendsList" */
import '../App.css';

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: "",
            age: 0,
            email: ""
        };
        console.log(this.state)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    render() {
        return (
            <form className="add-friend-form" onSubmit={this.props.handleSubmit}>
                <h3>Add/Remove Friend</h3>
                <div className="add-text">Name: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.changeHandler} name="name" />
                <div className="add-text">Age: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.changeHandler} name="age" />
                <div className="add-text">Email: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.changeHandler} name="email" />
                <button type="submit" className="submit-button" onClick={this.props.handleSubmit}>Add Friend</button>
            </form>


        )
    }
}
export default AddFriend;