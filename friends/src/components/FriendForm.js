import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            email: '',
            length: props.array.length
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addFriend = (props, e) => {
        // e.preventDefault();
        axios.post('http://localhost:5000/friends', {
            id: this.props.array.length + 1,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
        .then(function (response) {
            console.log(response)
            this.props.didMount();
        })
        .then(function (error) {
            console.log(error)
        });
    }

    render() {
        return (
            <div className="form-div">
                <form onSubmit={this.addFriend}>
                    <h1>Add Friend #{this.props.array.length + 1}</h1>
                    <p>Name: <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name}/></p>
                    <p>Age: <input type="text" name="age" onChange={this.handleInputChange} value={this.state.age}/></p>
                    <p>Email: <input type="text" name="email" onChange={this.handleInputChange} value={this.state.email}/></p>
                    <button type="submit">Submit</button>
                    <p><Link to="/">Go to friends list</Link></p>
                </form>
            </div>
        )
    }
}   

export default FriendForm;