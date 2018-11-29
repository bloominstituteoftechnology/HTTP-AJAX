import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
    background: #e2e1e0;
    height: 100vh;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log(response);
                this.setState({ friends: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    addNewFriend = e => {
        e.preventDefault()
        let send = {
            name: e.target[0].value,
            age: e.target[1].value,
            email: e.target[2].value
        }
        axios
            .post('http://localhost:5000/friends', send)
            .then(response => {
                console.log(response)
                this.setState({
                    friends: response.data
                })
            })
    }

    // removeFriend = id => {
    //     axios
    //         .delete(`http://localhost:333/friends/${id}`)
    //         .then(response => {
    //             console.log(response)
    //             this.setState({
    //                 friends: response.data
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <Div className="App">
                <FriendsList friends={this.state.friends} handleChange={this.handleChange} submit={this.addNewFriend} />
            </Div>
        );
    }
}

export default App;
