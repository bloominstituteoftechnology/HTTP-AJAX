import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
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
      .then(response => this.setState({friends: response.data}))
      .catch(err => {throw new Error(err);
  })}

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.age]: event.target.value });
    this.setState({ [event.target.email]: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">List of Friends</h1>
        </header>
        <FriendsList results={this.state.friends} />
        <br/>
        <h4>Add more friends here:</h4>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} placeHolder="Your friend's name" onChange={this.handleChange} /><br/><br/>
          </label>
          <label>
            Age:
            <input type="text" value={this.state.age} placeHolder="Your friend's age" onChange={this.handleChange} /><br/><br/>
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} placeHolder="Your friend's email" onChange={this.handleChange} /><br/><br/>
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;