import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';

export default class Friends extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
      };
    }

    componentDidMount() {
        axios
        .get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleTextInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    addFriend = () => {
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        axios
        .post(`http://localhost:5000/friends`, newFriend)
        .then(response => {
           this.setState({name: '', age: '', email: ''}) ;
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <div className="save-wrapper">
                <form onSubmit={this.addFriend}>
                    <input 
                        type="text"
                        onChange={this.handleTextInput}
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                    />
                    <input 
                        type="number"
                        onChange={this.handleTextInput}
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                    />
                    <input 
                        type="text"
                        onChange={this.handleTextInput}
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                    />
                    <button className="button" type="submit" >Save</button>
                </form>

                {this.state.friends.map(friend => {
                    return (
                        <div className="friend-wrapper">
                            <div key={friend.id} className="friend">
                                <div className="ame"> {friend.name} </div>
                                <div className="age"> {`age: ${friend.age}`} </div>
                                <div className="email"> {`email: ${friend.email}`} </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}