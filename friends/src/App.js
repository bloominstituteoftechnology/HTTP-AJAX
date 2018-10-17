import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')  
      .then(response => {this.setState({ friends: response.data}) } //data defined?
      )
      //.then(response => console.log(response))
      .catch(err => {console.log(err)
      })
  };
//get takes string as parameter, ie a url. 
//axios creates promise
//put data you want on state.  response.data is the array of friends.

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });  //name, age, email?
  };

  addNewFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.post('http://localhost:5000/friends/create', newFriend)  //passing an obj as new post request
      .then(savedNewFriend => {
        console.log(savedNewFriend);  //after request sent, axios gives us promise, THEN consumes promise
      })
      .catch(err => {
        console.log(err);
      })
      this.setState({ name: '', age: '', email: '' });  
      //set state as empty string
  }

  //deleteFriend

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Friends</h1>
        <form>
          <input 
            type="text"
            onChange={this.handleTextInput}
            name="name"
            placeholder="name"
            value={this.state.name}
          />
          <input 
            type="text"
            onChange={this.handleTextInput}
            name="age"
            placeholder="age"
            value={this.state.age}
          />
          <input 
            type="text"
            onChange={this.handleTextInput}
            name="email"
            placeholder="email"
            value={this.state.email}
          />
          <button onClick={this.addNewFriend}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
