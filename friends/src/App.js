import React, { Component } from 'react';
import axios from 'axios';



import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: []
    };
  }


  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.error('We have an error', error);
      });
  }

  render() {
    return (
      <div className="App">
      <h1>Some Text</h1>
      </div>
    );
  }
}

export default App;
