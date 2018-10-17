import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Form from './Components/Form'
import FriendsList from './Components/FriendsList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error))
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = event => {
    event.preventDefault()
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    this.setState({
      name: '',
      age: '',
      email: ''
    })
    window.location.reload()
  }



  render() {
    return (
      <div className="App">
        <FriendsList 
          friends={this.state.friends}
          delete={this.delete}
        />
        <Form 
          inputChange={this.inputChange}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default App;
