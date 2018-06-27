import React from 'react';
import axios from 'axios';
import FriendsList from './FriendsList';

class NewFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            friendName: '',
            friendAge: 0,
            friendEmail: '',
        }
    }

    componentDidMount () {
        axios
        .get("http://localhost:5000/friends")
        .then(response => {
            this.setState({friends: response.data});
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleFormChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleFormSubmit = event => {
        const friend = {
            name: this.state.friendName,
            age: this.state.friendAge,
            email: this.state.friendEmail,
        }
        if(!this.state.friendName || this.state.friendAge === 0 || !this.state.friendEmail) {
            return;
        }
        axios
            .post("http://localhost:5000/friends", friend)
            .then(response => {
                console.log(response.data);
                this.setState({friends: response.data, friendName: '', friendAge: 0, friendEmail: ''});
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onChange={this.handleFormChange}>
                    <input type="text" placeholder="Enter Friend's Name" name="friendName" />
                    <input type="number" placeholder="Enter Friend's Age" name="friendAge" />
                    <input type="text" placeholder="Enter Friend's Email" name="friendEmail" />
                    <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <FriendsList friends={this.state.friends} />
            </div>
        )
    }
}

export default NewFriendForm;