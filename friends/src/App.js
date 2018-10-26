import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Friend from './components/Friend';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
          friendsList: []
        }        
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
          this.setState({
            friendsList: [...response.data],
          })
        })       
        .catch(err => console.error(err))
    } 

    addNewFriend = friend => {
      axios.post('http://localhost:5000/friends', friend)
            .then(response => this.setState({
            friendsList: [...response.data]
            }))
            .catch(err => console.error(err))
    }

    updateFriendInfo = (id, friend) => axios.put(`http://localhost:5000/friends/${id}`, friend)
        .then(response => this.setState({friendsList: [...response.data]}))
        .catch(err => console.error(err))

    deleteFriend = id => axios.delete(`http://localhost:5000/friends/${id}`)
        .then(response => this.setState({friendsList: [...response.data]}))
        .catch(err => console.error(err))

    render() {
        return  <>                    
                    <Route 
                    exact path="/" 
                    render={props => <Home {...props} 
                                      friendsList={this.state.friendsList} 
                                      addNewFriend={this.addNewFriend} 
                                      deleteFriend={this.deleteFriend} 
                                      updateFriendInfo={this.updateFriendInfo} />}
                    />
                    <Route exact path="/friend/:id" render={props => <Friend {...props} friends={this.state.friendsList} />} />
                </>
      
    }
}