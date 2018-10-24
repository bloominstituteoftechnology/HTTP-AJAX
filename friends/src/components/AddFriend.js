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
            <form className="add-friend-form" onSubmit={this.props.handleSubmit}>
                <h3>Add Friend</h3>
                <h5>Enter new Friend Data</h5>
               {/*  <div className="select">
                    <select value={this.state.value} name="selected" onChange={this.props.changeHandler}>
                        
                        
                        <option value="vscode">VsCode</option>
                        <option value="atom">Atom</option>
                    </select>
                </div> */}
                <div className="add-text">Name: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="name" />
                <div className="add-text">Age: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="age" />
                <div className="add-text">Email: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="email" />
                <button type="submit" className="submit-button" onClick={this.props.handleSubmit}>Add Friend</button>
            </form>


        )
    }
}
export default AddFriend;