import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

const blankFormValues = {
  name: '',
  age: '',
  email: ''
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  handleChange = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value,
      }
    });
  }

  addNewFriend = event => {
    event.preventDefault();
    console.log('firing')
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({ friends: response.data, newFriend: blankFormValues }))
  }

  render() {
    return (
      <div className="App">
        <FriendList 
          friends = {this.state.friends}
          newFriend = {this.state.newFriend}
        />
        <FriendForm 
          friends = {this.state.friends}
          newFriend = {this.state.newFriend}
          handleChange = {this.handleChange}
          addNewFriend = {this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;