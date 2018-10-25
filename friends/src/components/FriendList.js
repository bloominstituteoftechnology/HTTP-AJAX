import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FriendForm from './FriendForm';
import FriendCard from './FriendCard';

const CardForFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = () => {
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        };
        axios
            .post('http://localhost:5000/friends', friend)

            .then(response => {
                this.setState({ name: '', age: '', email: ''});
                this.componentDidMount()
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteHandler = () => {
        alert("Are you positive you want to delete this friend?")
        };

    render() {
        return (
            <div>
                <FriendForm 
                handleSubmit={this.submitHandler}
                name={this.state.name}
                age={this.state.age}
                email={this.state.email}
                handleTextInput={this.changeHandler}
                />
                <CardForFlex>
                    {this.state.friends.map(friend => (
                                <FriendCard key={friend.id} friend={friend} handleDelete={this.deleteHandler} />
                    ))}    
                </CardForFlex>
            </div>
        );
    }
}