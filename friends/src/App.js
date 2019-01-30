import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
        error: 'No friends!'
    }
  }
  // mounting localhost:5000 to state
  // made Promise that returns data if true otherwise returns error
  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
          console.log(response.data)
          this.setState({
            friends: response.data
          })
        })
        .catch(error => {
            this.setState({ error: error.response })
          console.log(error)
        })
  }

  render() {
    return (
      <div className="App">
        test
      </div>
    );
  }
}

export default App;
