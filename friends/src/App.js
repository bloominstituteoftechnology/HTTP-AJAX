import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }
  handleOnChange = event => {
    this.setState({ [event.target.name] : event.target.value});
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }));
  }
  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends} />
        <form>
          <input 
            name='name'
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input
            name='age'
            type='text'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleOnChange}
          />
          <input
            name='email'
            type='text'
            placeholder='Email Address'
            value={this.state.email}
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
