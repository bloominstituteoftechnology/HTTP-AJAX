import React, { Component } from 'react';
import axios from 'axios';

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

    handleTextImput = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    savedFriend = () => {
        const addToSavedList = this.props.addToSavedList;
        axios
        .post(`http://localhost:5000/friends`, addToSavedList)
        .then(savedFriend => {
            console.log(savedFriend);
        })
        .catch(err => {
            console.log(err);
        });
        this.setState({ name: '', age: '', email: '' });
    };

    render() {
        return (
            <div className="save-wrapper">
                <input 
                type="text"
                onChange={this.handleTextImput}
                placeholder="name"
                name="name"
                value={this.state.name}
                />
                <input 
                type="number"
                onChange={this.handleTextImput}
                placeholder="age"
                name="age"
                value={this.state.age}
                />
                <input 
                type="text"
                onChange={this.handleTextImput}
                placeholder="email"
                name="email"
                value={this.state.email}
                />
                <button onClick={this.saveFriend}>Save</button>
            </div>
        )
    }
}