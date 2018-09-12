import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: null,
      email: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        // set our state with the new data
        this.setState({ friends: response.data});
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addNewFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', newFriend)
    .then(response => {
      this.setState({
        friends: response.data
      });
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends}/>

        <form >
          <input onChange={this.handleChange} name='name' placeholder='name' value={this.state.name} type='text'/>
          <input onChange={this.handleChange} name='age' placeholder='age' value={this.state.age} type='number'/>
          <input onChange={this.handleChange} name='email' placeholder='email' value={this.state.email} type='email'/>
          
        </form>
        <button onClick={this.addNewFriend}>Add</button>
      </div>
    );
  }
}

export default App;
