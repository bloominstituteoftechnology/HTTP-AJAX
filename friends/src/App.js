import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friend from './Friend';

class App extends Component {
    state = {
        friends: [],
        name: '',
        age: 0,
        email: '',
    };

    onChange = event => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
        console.log(this.state);
    };

    onSubmit = event => {
        const { name, age, email } = this.state;

        axios
            .post('http://localhost:5000/friends', {
                name,
                age,
                email,
            })
            .then(result => {
                console.log('success', result);
            }).catch(error => {
              console.log('error', error);
            });
    };

    getFriends = () => {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(error => {
            console.log('error:', error);
        });
    }

    render() {
        return (
            <div className="App">
            <Friend friends={this.state.friends} />
                <div className="add-friend-form">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" name="name" onChange={this.onChange} />
                        <label htmlFor="age">Age:</label>
                        <input type="number" name="age" onChange={this.onChange} />
                        <label htmlFor="age">Email:</label>
                        <input type="email" name="email" onChange={this.onChange} />
                        <input type="submit" value="submit" />
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
