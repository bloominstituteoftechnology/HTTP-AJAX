import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    const server = 'http://localhost:5000/friends';
    axios
    .get(server)
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
      // .catch(err => {
      //   console.log(err);
      // })
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <Friends friends={this.state.friends} />
        </div>
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
