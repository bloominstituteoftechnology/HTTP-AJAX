import React from 'react'
import axios from 'axios'
import Friend from './Friend'
import './friends.css'

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/friends")
            .then(response => {
                console.log("GET RESPONSE", response);
                this.setState({ friends: response.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleSubmitFriend = (e) => {
        e.preventDefault();
        const friend = { name: this.state.name, age: this.state.age, email: this.state.email }
        axios
            .post("http://localhost:5000/friends", friend)
            .then(response => {
                console.log("POST RESPONSE", response);
                this.setState({ friends: response.data, name: '', age: '', email: '' });
            })
            .catch(error => console.log(error));
    }

    handleNameChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div>
                {this.state.friends.map((friend) => (
                    <Friend key={friend.id} friend={friend} />
                ))}
                <form className="form">
                    <input
                        className="field"
                        type="text"
                        placeholder="name"
                        name="name"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                    <input
                        className="field"
                        type="number"
                        placeholder="age"
                        name="age"
                        onChange={this.handleNameChange}
                        value={this.state.age}
                    />
                    <input
                        className="field"
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={this.handleNameChange}
                        value={this.state.email}
                    />
                    <button className="field-btn" onClick={this.handleSubmitFriend}>Submit Friend</button>
                </form>
            </div>);
    }
}

export default Friends;