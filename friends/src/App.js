import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Navigation from './components/Navigation';
import FriendList from './components/FriendList';
import PostForm from './components/PostForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  postFriend = (friend) => {
    axios
      .post(`http://localhost:5000/friends`, friend )
      .then(response => {
        console.log(response)
        this.setState({friends: this.state.friends})
        })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact path='/post'
          render={(props) => <PostForm postFriend = {this.postFriend}/>}
        />
        <Route
          exact path = '/'
          render={(props) => <FriendList friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
