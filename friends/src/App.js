import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friend from './Friend';

class App extends Component {
    state = {
        friends: [],
        name: '',
        age: null,
        email: '',
    };

    onChange = event => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
        console.log(this.state);
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.age && this.state.email) {
            const { name, age, email } = this.state;

            axios
                .post('http://localhost:5000/friends', {
                    name,
                    age,
                    email,
                })
                .then(result => {
                    console.log('success', result);
                    this.getFriends();
                })
                .catch(error => {
                    console.log('error', error);
                });
        } else {
            alert('Please complete required fields'); // probably a better way to handle this without using an alert
        }
        this.setState({ name: '', age: null, email: '' });
    };

    deleteFriend = (id) => {
        console.log(id);
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then((result) => {
                console.log('sucessfully deleted', result);
                this.getFriends();
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    updateFriend = (id, name, age, email) => {

    }

    getFriends = () => {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(error => {
                console.log('error:', error);
            });
    };

    render() {
        return (
            <div className="App">
                <Friend
                    friends={this.state.friends}
                    deleteFriend={this.deleteFriend}
                    updateFriend={this.updateFriend}
                />
                <div className="add-friend-form">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            name="age"
                            onChange={this.onChange}
                            value={this.state.age}
                        />
                        <label htmlFor="age">Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                        <input type="submit" value="Add Friend" />
                    </form>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getFriends();
    }
}

export default App;
