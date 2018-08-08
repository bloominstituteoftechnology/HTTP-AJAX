import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Friends from './components/Friends';



class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      loading: true,
    };
  }

componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then((response) => this.setState({friends: response.data }))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <h1>
          I have the coolest friends!
        </h1>
        <Friends friends = {this.state.friends} />
      </div>
    );
  }
}

export default App

