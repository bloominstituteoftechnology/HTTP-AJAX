import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend';
import Form from './Form';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }

  updateFriends = (para1) => {
    axios.post('http://localhost:5000/friends', para1)
    .then(response => {
        console.log(para1);
        console.log(response);
        this.setState({
          friends: response.data
        })
    })
      .catch(err => console.log(err));
}
  
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <NavLink to="/current">
          Current Friends
        </NavLink>
        <NavLink to="/friend-form">
          New Friend Form 
        </NavLink>
        <Route exact path="/current" render={props => (
          <Friend {...props} friends={this.state.friends} />
        )}
        />
        <Route exact path="/friend-form" render={props => (
          <Form {...props} friend={this.state.friend} updateFriends={this.updateFriends} />
        )}
        />
      </div>
    );
  }
}

export default App;
