import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: '',
    }
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={props => <FriendsList
        {...props}
        friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
