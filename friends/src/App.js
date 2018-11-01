import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './Friend.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
       friends: [],
       newFriend: {
         name: '',
         age: '',
         email: ','
       }
  };
}

componentDidMount = () => {
  axios.get('http://localhost:5000/friends')
    .then( response => {
      console.log('It works');
      console.log(response.data)
      this.setState({ friends: response.data})
    })
    .catch( err=> console.log(err))
  }

  changeHandler = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  }

  addFriend = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => this.setState({ friends: response.data}))
  };

  render() {
    return (
      <div className="App">
          {this.state.friends.map(item => (
          <Friend key={item.id} friend={item} />
        ))}

        <form onSubmit={this.submitNewFriend}>
            <h1>Add a new friend!</h1>
            <input type='text' placeholder='name' onChange={this.inputChangeHandler}></input>
            <input type='number' placeholder='age' onChange={this.inputChangeHandler}></input>
            <input type='email' placeholder='email' onChange={this.inputChangeHandler}></input>
            <button onClick={this.test}>Submit</button>
        </form>
        </div>
    );
  }
}

export default App;
