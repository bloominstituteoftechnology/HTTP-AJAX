import React, { Component } from 'react';
import './App.css';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendData: [],
      friend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friendData: response.data});
    })
    .catch(error => {
      console.error('Server Errpr', error);
    });
  }

  handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend, 
        [event.target.name]: event.target.value,
      }
    })
  }

  handleInput = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', 
    this.state.friend)
    .then(response => {
      this.setState({friendData: response.data})
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Add A New Friend</h2>
        <FriendForm form={this.state.friend} handleChange={this.handleChange} handleInput={this.handleInput} />
        <h2>Friend List</h2>
        <FriendList friend={this.state.friendData} />
      </div>
    );
  }
}

export default App;
