import React, { Component } from 'react';
import axios from 'axios';
import './AddFriend.css';

export default class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });
            console.log(response);
        })
        .catch(error => {
            console.log(`Error fetching friends: ${error}`);
           console.log(error)
        });
    }
    
    render() {
        return (
            <div className="AddFriendForm">
                <form className="formBox">
                    <p className="friendTitle">Add A New Friend</p>
                    <input class="inputField1" type="text" name="name" placeholder="Name" />
                    <input class="inputField" type="number" name="age" placeholder="Age" />
                    <input class="inputField" type="text" name="email" placeholder="E-mail" />
                    <button class="submitButton">Submit</button>
                </form>
            </div>
        )
    }
}
