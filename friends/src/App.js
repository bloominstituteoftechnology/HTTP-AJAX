import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendList from './Components/FriendList';


const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      loading: true,
      name: '',
      age: [],
      email: ''
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>New Friends?</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
              <input type="text" value={this.state.name} onChange={this.handleName} />
          </label>
          <label>
            Age:
              <input type="text" value={this.state.age} onChange={this.handlePrice} />
          </label>
          <label>
            email:
              <input type="text" value={this.state.email} onChange={this.handleEmail} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <FriendList friends={this.state.friends} />
      </div>
    );
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  }

  handlePrice = (event) => {
    event.preventDefault();
    this.setState({
      age: event.target.value
    });
  }

  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
      .then(response => {
        this.setState({ friends: response.data, name: "", age: [], email: "" });
      })
      .catch(error => {
        console.log(error);
      });
      // this.setState({Name: "", Age: [], Email: ""})
  }

}

export default App;
