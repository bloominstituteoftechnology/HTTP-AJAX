import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
import Inputs from './components/Inputs';


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
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Inputs friend={this.friend} newFriend={this.newFriend} name={this.state.name} age={this.state.age} email={this.state.email}/>
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
