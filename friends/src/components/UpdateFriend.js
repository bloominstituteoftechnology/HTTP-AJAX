import React, { Component } from 'react';
import axios from "axios";
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
    }

 componentDidMount() {
    this.setState(() => ({ friends: this.state.friends })); 
 }

 componentDidUpdate() {

  } 

    render() {
        return (
            <div>
            <form className="update-friend-form" onClick={this.props.handleUpdate}>
                <h3>Update Friend</h3>
                <p>Select the friend to update, then enter the new data. Press the Update Button when you are finished.</p>                        
                <div className="add-text">Name: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="name" />
                <div className="add-text">Age: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="age" />
                <div className="add-text">Email: </div>
                <input type="text" className="add-input" value={this.state.value} onChange={this.props.changeHandler} name="email" />
                <button type="submit" className="submit-button" onClick={this.props.handleUpdate}>Update Friend</button>
            </form>
            </div>
        )
    }
}
export default UpdateFriend;