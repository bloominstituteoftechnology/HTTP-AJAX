import React, { Component } from 'react';
import axios from 'axios';


class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            age: "",
            email: "",
            dateAdded: Date.now()
        }
    }

    handleTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        const newState = this.state
    axios.post('http://localhost:5000/friends', {newState})
    .then(response => {response.data})
    .then(() => {console.log(this.state)})
    .catch(err => console.log(`${err}`))
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" type="text" placeholder="Name" onChange={this.handleTextChange} />
                    <input name="age" type="text" placeholder="Age" onChange={this.handleTextChange} />
                    <input name="email" type="text" placeholder="Email" onChange={this.handleTextChange} />
                </form>
                <button type="submit" onClick={this.handleSumbit}>Submit</button>
            </div>
         )
    }
}
 
export default FriendForm;