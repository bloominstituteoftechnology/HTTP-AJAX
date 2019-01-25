import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
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
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err));
  }

  postFriend = (friend) => {
    axios
      .post(`http://localhost:5000/friends`, friend )
      .then(response => {
        console.log(response)
        this.props.history.push('/');
        this.setState({friends: this.state.friends})
        window.location.reload();
        })

      .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log('Response:', response)
        window.location.reload();
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact path='/post'
          render={(props) => <PostForm {... props } postFriend = {this.postFriend}/>}
        />
        <Route
          exact path = '/'
          render={(props) => <FriendList {... props } friends={this.state.friends}
          deleteFriend = {this.deleteFriend} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
