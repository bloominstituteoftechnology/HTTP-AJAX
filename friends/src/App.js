import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      // inputText: '',
      // age: '',
      // email: ''
    }
  }

  componentDidMount() {
      axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(err => console.log(err))
  }

  // handleNameInput = event => {
  //   event.preventDefault();
  //   this.setState({inputText: event.target.value})
  // }

  // handleAgeInput = event => {
  //   event.preventDefault();
  //   this.setState({age: event.target.value})
  // }

  // handleEmailInput = event => {
  //   event.preventDefault();
  //   this.setState({email: event.target.value})
  // }

  // handleSubmit = () => {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:5000/friends',
  //     data: {
  //       "name": `${this.state.inputText}`,
  //       "age": this.state.age,
  //       "email": `${this.state.email}`
  //     }
  //   })
  //   this.setState({
  //     inputText: '',
  //     age: '',
  //     email: ''
  //   })
  // }

  componentDidUpdate() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <input type='text' value={this.state.inputText} onChange={this.handleNameInput} placeholder='name' />
        <input type='text' value={this.state.age} onChange={this.handleAgeInput} placeholder='age' />
        <input type='text' value={this.state.email} onChange={this.handleEmailInput} placeholder='email' />
        <button type="submit" onClick={this.handleSubmit}>Add Friend</button> */}
        <Form />
        <div>
          {this.state.friends.map(friend => <li key={friend.id}>{friend.name} is {friend.age} and can be reached at : {friend.email}</li>)}
        </div>
      </div>
    );
  }
}

export default App;
