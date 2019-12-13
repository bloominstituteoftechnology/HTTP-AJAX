import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './Friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      id: function () {
        return this.friends[this.friends.length - 1].id + 1;
      }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then((response) => { this.setState({ friends: response.data }) })
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let id = this.state.id() + 1;
    axios.post(`http://localhost:5000/friends`, { id: id, name: this.state.name, age: Number(this.state.age), email: this.state.email })
  }

  delete = (id) => {
    console.log('delete')
    console.log('id', id)
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => { 
        console.log('response', response)
        this.setState({ friends: response.data }) })
      .catch(err => console.log(err))
  }

  update = (event, id, obj) => {
    event.preventDefault()
    axios.put(`http://localhost:5000/friends/${id}`, obj)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log('this.state.friends', this.state.friends)
    if (this.state.friends.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Friends</h1>
        </header>
        
        <form onSubmit={this.handleSubmit}>
          <div> 
            Name: <input name="name" type="text" value={this.state.name} placeholder="Type in your name" onChange={this.handleChange} />
          </div> 
          <div>
            Email: <input name="email" type="email" value={this.state.email} placeholder="Type in your email" onChange={this.handleChange} />
          </div> 
          <div>
            Age: <input name="age" type="number" min="1" value={this.state.age} placeholder="Type in your age" onChange={this.handleChange} />
          </div>
          <input className='submit' type="submit" value="Submit" />
        </form>
        <Friends friends={this.state.friends} delete={this.delete} update={this.update} />
      </div >
    )
  }
}

export default App;
