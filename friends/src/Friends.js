
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      age: '',
      email: ''
    };
  }



  componentDidMount() {
    axios
      .get(`http://localhost:8000/note/get/all`)
      .then(response => {
        this.setState({ name: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }



  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  saveNameData = () => {
    const name = { title: this.state.title, textBody: this.state.textBody };
    axios
      .post(`http://localhost:8000/note/create`, name)
      .then(savedName => {
        console.log(savedName);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ title: '', textBody: '' });
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>

        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="name"
          name="name"
          value={this.state.name}
        />

        <input
          type="number"
          onChange={this.handleTextInput}
          placeholder="age"
          name="age"
          value={this.state.age}
        />

        <input
            type="text"
            onChange={this.handleTextInput}
            placeholder="email"
            name="email"
            value={this.state.email}

        <button onClick={this.saveFriend}>Save Friend</button>

      </div>

    );

  }

}



export default App;