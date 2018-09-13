import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Friend from './components/Friend';
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';

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
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">
        <h1>Friends App</h1>
        <FriendList friends={this.state.friends} />
        <AddFriendForm />
      </div>
    );
  }
}

export default App;
