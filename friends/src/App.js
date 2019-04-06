// import React, { Component } from 'react';
// import logo from './logo.svg';

import React from "react";

import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

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
                console.log("response", response);
                this.setState({ friends: response.data })
            })
            .catch( err => console.error("Whoopsie you got an error:", err));
    }

    postFriend = friend => {
        console.log('post friend.. ')
        // e.preventDefault();
        axios
            .post("http://localhost:5000/friends", friend)
            .then(response =>{
                console.log("post response", response)
                this.setState({ friends: response.data})
            })
            .catch(err => console.error('post error:', err))
    }

    updateFriend = (friend, id) => {
        console.log('post friend.. ')
        // e.preventDefault();
        axios
            .put(`http://localhost:5000/friends/${id}`, friend)
            .then(response =>{
                console.log("post response", response)
                this.setState({ friends: response.data})
            })
            .catch(err => console.error('post error:', err))
    }


    render() {
        return (
            <div className="App">
                <h1>Shayaan Works on HTTP-AJAX</h1>
              <FriendForm
                  postFriend={this.postFriend}
              />
            </div>
        );
    }
}

export default App;
