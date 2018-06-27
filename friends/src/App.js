import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsData: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friendsData: response.data }))
      .catch(err => console.log(err))
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email }
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => this.setState({ friendsData: response.data, name: '', age: '', email: '' }))
      .catch(err => console.log(err));
  }

  onSumbit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsData} />
        <AddFriendForm handleInput={this.handleInput} onSubmit={this.onSumbit} onClick={this.handleSubmit} name={this.state.name} age={this.state.age} email={this.state.email} />
      </div>
    );
  }
}

export default App;
