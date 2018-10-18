import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      name: '',
      age: '',
      email:''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log(err)
    })
  }


  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveFriend = () => {
    const myObj = { name: this.state.name, age: this.state.age, email: this.state.email }
    axios
      .post('http://localhost:5000/friends', myObj)
      .then(saved => {
        console.log(saved)
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({ name: '', age: '', email: '' })
  }

  render() {
    return (
      <div className="App">
          <div className='friends'>{this.state.notes.map(friends => {
            return(
             <div key={friends.id}>{friends.name} {friends.age}, email: {friends.email}</div>
            );
          })}</div>
          <Form 
          saveFriend={this.saveFriend}
          handleInput={this.handleInput}
          name={this.state.name}
          email={this.state.email}
          age={this.state.age}
          />
      </div>
    );
  }
}

export default App;
