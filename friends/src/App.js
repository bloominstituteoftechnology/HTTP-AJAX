// import React, { Component } from 'react';
// import logo from './logo.svg';

import React from "react";

import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import UpdateFriendComponent from './components/UpdateFriend';


class App extends React.Component {


    constructor() {
        super();
        this.state = {
            friends: []
            // postFriendMessage: ''
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log("put response", response.data)
                this.setState({friends: response.data})
            })
            .catch(err => console.error("Whoopsie you got an error:", err));
    }

    deleteFriend = id => {
        console.log('delete friend.. ')
        // e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response =>{
                console.log("delete response", response.data)
                this.setState({ friends: response.data})
            })
            .catch(err => console.error('delete error:', err))
    }

    deleteFriend = e => {
        this.setState({
            friendInfo: {
                ...this.state.friendInfo,
                [e.target.name]: e.target.value
            }
        })
    }


    changeFriendHandler = e => {
        this.setState({
            friendInfo: {
                ...this.state.friendInfo,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Shayaan works on HTTP-AJAX</h1>
                <Route exact path="/" render={props => <FriendList {...props} deleteFriend={this.deleteFriend} friends={this.state.friends}/> }/>
                <FriendForm
                    postFriend={this.postFriend}
                />
                <Route path='/friends/:id' render={props =>  <UpdateFriendComponent updateFriend={this.updateFriend} />} />
            </div>
        );
    }

}

export default App;
