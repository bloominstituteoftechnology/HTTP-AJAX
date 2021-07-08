import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import FriendList from './FriendList';
import NewFriend from './NewFriend';

class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data }))
            .catch(error => {
                console.error('Server Error', error)
            });
    }

    handleNewFriend = newFriends => {
        
        this.setState({ friends: newFriends})
    }

    deleteFriend = noFriend => {

        this.setState({ friend: null })
    }

    render() {
        return (
        <div>
            {/* <h1>Hello</h1> */}
            < Route exact path='/friendlist' render={ routeProps =>
            < FriendList {...routeProps} friends={this.state.friends} 
            newFriendHandler={this.handleNewFriend} deleteFriendHandler={this.deleteFriend}/> }
            />
        </div> 
        );
    }
}

export default App;