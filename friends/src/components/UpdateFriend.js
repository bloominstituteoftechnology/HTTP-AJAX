import React, { Component } from 'react';
import axios from "axios";
/* import FriendsList from "./friendsList" */
import '../App.css';

class UpdateFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: "",
            age: 0,
            email: "",
            selected: ""
        };
        console.log(this.state)
    }

 componentDidMount() {
    this.setState(() => ({ friends: this.props.friends }));
   /*  this.setState = ({ friends: this.props.friends}) */
    console.log("component did mount in addfriends:", this.state)

 }

    render() {
        return (
            <form className="update-friend-form" onSubmit={this.props.handleUpdate}>
                <h3>Update Friend</h3>
                           
                <div className="add-text">Name: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="name" />
                <div className="add-text">Age: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="age" />
                <div className="add-text">Email: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="email" />
                <button type="submit" className="submit-button" onClick={this.props.handleUpdate}>Update Friend</button>
            </form>


        )
    }
}
export default UpdateFriend;