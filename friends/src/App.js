import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';


class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: null,
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  friend = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  newFriend = e => {
    e.preventDefault()
    const friends = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', friends)
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err))

    this.setState({
      name: '',
      age: null,
      email: ''
    })
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.newFriend}>

          <input
            type='text'
            placeholder='name'
            name='name'
            value={this.state.name}
            onChange={this.friend}
          />

          <br />

          <input
            type='number'
            placeholder='0'
            name='age'
            value={this.state.age}
            onChange={this.friend}
          />

          <br />

          <input
            type='email'
            placeholder='email'
            name='email'
            value={this.state.email}
            onChange={this.friend}
          />

          <br />

          <button onClick={this.newFriend}>Add Friend</button>

        </form>

        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
